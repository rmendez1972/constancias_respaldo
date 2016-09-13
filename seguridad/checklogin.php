<?PHP

// loading functions and libraries

function random($max) {

	// create random number between 0 and $max

	srand( (double)microtime() * 1000000 );

	$r = round(rand(0, $max));

	if ($r != 0) $r = $r - 1;

	return $r;

}



function rotateBg() {

	// rotate background login interface

	global $backgrounds, $bgImage, $i;

	$c = count($backgrounds);

	if ($c == 0) return;

	$r = random($c);

	if ($backgrounds[$r] == '' && $i < 10) {

		$i++;

		rotateBg();

	} elseif ($i >= 10) {

		if (!$bgImage || $bgImage == '') {

			$bgImage = 'bg_lock.gif';

		} else {

			$bgImage = $bgImage;

	}	}

	else { $bgImage = $backgrounds[$r]; }

	return $bgImage;

}



function in_array_php3($needle, $haystack) {

	// check if the value of $needle exist in array $haystack

	// works for both php3 and php4

	if ($needle && $haystack) {

		if (phpversion() >= 4) {

			// phpversion = 4

			return(in_array($needle, $haystack));

		} else {

			// phpversion = 3

			for ($i = 0; $i <= count($haystack); $i++) {

				if ($haystack[$i] == $needle) {

					return(true);

			}	}

			return(false);

	}	}

	else return(false);

}



if ($noDetailedMessages == true) {

	$strUserNotExist = $strUserNotAllowed = $strPwNotFound = $strPwFalse = $strNoPassword = $strNoAccess;

}

if ($bgRotate == true) {

	$i = 0;

	$bgImage = rotateBg();

}



// Check if secure.php has been loaded correctly

if ( !defined("LOADED_PROPERLY") || $HTTP_GET_VARS['cfgProgDir'] || $HTTP_POST_VARS['cfgProgDir']) {

	echo "Parsing of phpSecurePages has been halted!";

	exit();

}



// make post variables global

$entered_login = $HTTP_POST_VARS['entered_login'];

$entered_password = $HTTP_POST_VARS['entered_password'];



// check if login is necesary

if (!$entered_login && !$entered_password) {

	// use data from session

	if (phpversion() >= 4) {

		// phpversion = 4

		session_name('constancias');

		session_start();

		// session hack to make sessions on old php4 versions work

		if (phpversion() > 4.0) {

			$login = $HTTP_SESSION_VARS['login'];

			$password = $HTTP_SESSION_VARS['password'];

		}

	} else {

		// phpversion = 3

		session_start_php3();

}	}

else {

	// use entered data

	if (phpversion() >= 4) {

		// phpversion = 4

		session_name('constancias');

		session_start();

		session_unregister("login");

		session_unregister("password");



		// encrypt entered login & password

		$login = $entered_login;

		if ($passwordEncryptedWithMD5 && function_exists(md5)) {

			$password = md5($entered_password);

		} else {

			$password = $entered_password;

		}

		// session hack to make sessions on old php4 versions work

		if (phpversion() > 4.0) {

			$HTTP_SESSION_VARS['login'] = $login;

			$HTTP_SESSION_VARS['password'] = $password;

		} else {

			session_register("login");

			session_register("password");

		}

	} else {

		// phpversion = 3

		session_destroy_php3();

		session_start_php3();



		// encrypt entered login & password

		$login = $entered_login;

		if ($passwordEncryptedWithMD5 && function_exists(md5)) {

			$password = md5($entered_password);

		} else {

			$password = $entered_password;

		}

		session_register_php3("login", "STRING", $login);

		session_register_php3("password", "STRING", $password);

}	}



if (!$login) {

	// no login available

	include($cfgProgDir . "seguridad/login.php");

	exit;

}

if (!$password) {

	// no password available

	$message = $strNoPassword;

	include($cfgProgDir . "seguridad/login.php");

	exit;

}





// use phpSecurePages with Database

if ($useDatabase == true) {

	// contact database

	if ( empty($cfgServerPort) ) {

		mysql_connect($cfgServerHost, $cfgServerUser, $cfgServerPassword)

		or die($strNoConnection);

	} else {

		mysql_connect($cfgServerHost . ":" . $cfgServerPort, $cfgServerUser, $cfgServerPassword)

		or die($strNoConnection);

	}

	$userQuery = mysql($cfgDbDatabase, "SELECT * FROM $cfgDbTableUsers WHERE $cfgDbLoginfield = '$login'")

		or die($strNoDatabase);



	// check user and password

	if (mysql_num_rows($userQuery) != 0) {

		// user exist --> continue

		$userArray = mysql_fetch_array($userQuery);

		
		

		if ($login != $userArray[$cfgDbLoginfield] || $userArray[$cfgDbUserIDfield]!=1 ) {

			// Case sensative user not present in database

			$message = $strUserNotExist;

//			include($cfgProgDir . "logout.php");

			include($cfgProgDir . "seguridad/login.php");

			exit;

	}	}

	else {

		// user not present in database

		$message = $strUserNotExist;

//		include($cfgProgDir . "logout.php");

		include($cfgProgDir . "seguridad/login.php");

		exit;

	}

	if (!$userArray[$cfgDbPasswordfield]) {

		// password not present in database for this user

		$message = $strPwNotFound;

		include($cfgProgDir . "seguridad/login.php");

		exit;

	}

	if (stripslashes($userArray["$cfgDbPasswordfield"]) != $password) {

		// password is wrong

		$message = $strPwFalse;

//		include($cfgProgDir . "logout.php");

		include($cfgProgDir . "seguridad/login.php");

		exit;

	}

	if ( isset($userArray["$cfgDbUserLevelfield"]) && !empty($cfgDbUserLevelfield) ) {

		$userLevel = stripslashes($userArray["$cfgDbUserLevelfield"]);

	}

	if ( ( $requiredUserLevel && !empty($requiredUserLevel[0]) ) || $minUserLevel ) {

		// check for required user level and minimum user level

		if ( !isset($userArray["$cfgDbUserLevelfield"]) ) {

			// check if column (as entered in the configuration file) exist in database

			$message = $strNoUserLevelColumn;

			include($cfgProgDir . "seguridad/login.php");

			exit;

		}

		if ( empty($cfgDbUserLevelfield) || ( !in_array_php3($userLevel, $requiredUserLevel) && ( !isset($minUserLevel) || empty($minUserLevel) || $userLevel < $minUserLevel ) ) ) {

			// this user does not have the required user level

			$message = $strUserNotAllowed;

			include($cfgProgDir . "seguridad/login.php");

			exit;

	}	}

	if ( isset($userArray["$cfgDbUserIDfield"]) && !empty($cfgDbUserIDfield) ) {

		$ID = stripslashes($userArray["$cfgDbUserIDfield"]);

}	if ( isset($userArray["$cfgDbUserDistrito"]) && !empty($cfgDbUserDistrito) ) {

		$district = stripslashes($userArray["$cfgDbUserDistrito"]);

	}

	}





// use phpSecurePages with Data

elseif ($useData == true && $useDatabase != true) {

	$numLogin = count($cfgLogin);

	$userFound = false;

	// check all the data input

	for ($i = 1; $i <= $numLogin; $i++) {

		if ($cfgLogin[$i] != '' && $cfgLogin[$i] == $login) {

			// user found --> check password

			if ($cfgPassword[$i] == '' || $cfgPassword[$i] != $password) {

				// password is wrong

				$message = $strPwFalse;

				include($cfgProgDir . "seguridad/logout.php");

				include($cfgProgDir . "seguridad/login.php");

				exit;

			}

			$userFound = true;

			$userNr = $i;

	}	}

	if ($userFound == false) {

		// user is wrong

		$message = $strUserNotExist;

		include($cfgProgDir . "seguridad/logout.php");

		include($cfgProgDir . "seguridad/login.php");

		exit;

	}

	$userLevel = $cfgUserLevel[$userNr];

	if ( ( $requiredUserLevel && !empty($requiredUserLevel[0]) ) || $minUserLevel ) {

		// check for required user level and minimum user level

		if ( !in_array_php3($userLevel, $requiredUserLevel) && ( !isset($minUserLevel) || empty($minUserLevel) || $userLevel < $minUserLevel ) ) {

			// this user does not have the required user level

			$message = $strUserNotAllowed;

			include($cfgProgDir . "seguridad/login.php");

			exit;

	}	}	

	$ID = $cfgUserID[$userNr];

}





// neither of the two data inputs was chosen

else {

	$message = $strNoDataMethod;

	include($cfgProgDir . "seguridad/login.php");

	exit;

}



// restore values

if ($dbOld) $db = $dbOld;

if ($messageOld) $message = $messageOld;

?>