// Ver: 5.0.50303
if(typeof(st_js)=="undefined"){
stDRTL=0;
stAHCM=0;// 0
stAHWS=1;// 1
stSMSC=1;// 1
stSCSP=0;// 0
stCFSP=0;// 0
stBIMG=1;// 1
stILOC=0;// 0
stILNK=0;// 0
stDF55=0;// 0
stMMSZ=10;// 10
nOP=nOP5=nIE=nIE4=nIE5=nNN=nNN4=nNN6=nKQ=nKQ2=nMAC=nIEM=nIEW=nDM=nVER=st_delb=st_addb=st_scd=st_ascr=0,stmozb=0;stnav();st_reg=!(nIEW&&nVER>=5.5&&nVER<6&&stDF55);
st_ttb=nIE;stHAL=["left","center","right"];stVAL=["top","middle","bottom"];stREP=["no-repeat","repeat-x","repeat-y","repeat"];stBDS=["none","solid","double","dotted","dashed","groove","ridge","inset","outset"];
st_gc=st_rl=st_cl=st_ct=st_cw=st_ch=st_cm=st_cp=st_ci=st_load=st_scr=0;st_ht="";st_ims=[];st_ms=[];stusrld=[];
if(nNN4){stitovn=stevfn("stitov",1);stitoun=stevfn("stitou",1);stitckn=stevfn("stitck",1);stppovn=stevfn("stppov",0);stppoun=stevfn("stppou",0);}
if(nIEM||nOP5)onunload=function(){for(var j=0;j<st_ms.length;++j)st_ms[j].cfrm=0;return true;}
if(nDM&&!nNN4)
{
	var s="<STYLE>\n.st_tbcss,.st_tdcss,.st_divcss,.st_ftcss{border:none;padding:0px;margin:0px}\nA.st_acss,A.st_acss:link,A.st_acss:visited,A.st_acss:active,A.st_acss:hover{background-color:transparent;font-style:normal;border:none}\n</STYLE>";
	for(var j=0;j<stMMSZ;++j)
		s+="<FONT ID=st_gl"+j+"></FONT>";
	if(nIEW&&nVER>=5&&document.body)
		document.body.insertAdjacentHTML("AfterBegin",s);
	else
		document.write(s);
}st_js=1;}
function stm_bm(a){var w=a[2]&&a[2].charAt(a[2].length-1)!='/'?a[2]+'/':a[2];var p=a.length>15?a[15]&&a[15].charAt(a[15].length-1)!='/'?a[15]+'/':a[15]:"";st_ms[st_cm]={ps:[],mscm:[0,0],mei:st_cm,ids:"Stm"+st_cm+"p",hdid:0,cked:0,cfrm:0,tfrm:window,sfrm:window,mcff:"",mcfd:0,mcfn:0,mcfb:1,mcfx:0,mcfy:0,mnam:a[0],mver:a[1],mweb:w,mbnk:stbuf(w+a[3]),mtyp:a[4],mcox:a[5],mcoy:a[6],maln:stHAL[a[7]],mcks:a[8],msdv:a[9],msdh:a[10],mhdd:nNN4?Math.max(100,a[11]):a[11],mhds:a[12],mhdo:a[13],mhdi:a[14],mpre:p,args:a.slice(0),mwid:a.length>16?a[16]:"",midn:(a.length>17?a[17]:0)};}
function stm_bp(l,a){var m=st_ms[st_cm],p,i=m.ps.length?m.ps[st_cp].is[st_ci]:0;st_cp=m.ps.length;st_ci=0;m.ps[st_cp]=p={is:[],mei:st_cm,ppi:st_cp,ids:"Stm"+st_cm+"p"+st_cp+"i",par:i,tmid:0,cuit:0,issh:0,isst:!st_cp&&!m.mtyp,isck:!st_cp&&(m.mcks&1),exed:0,pver:a[0],pdir:a[1],poffx:a[2],poffy:a[3],pspc:a[4],ppad:a[5],plmw:a[6],prmw:a[7],popc:a[8],pstp:a[14],psds:nIEW?a[15]:0,pscl:a[16],pbgc:a[17],pbgi:stbuf(stgsrc(a[18],0)),pbgr:stREP[a[19]],pbds:stBDS[a[20]],ipbw:a[21],pbdc:(!nDM||nNN4)?a[22].split(/\s/gi)[0]:a[22],args:a.slice(0)};p.peff=[stgeff(a[9],a[10],a[13],p),stgeff(a[11],a[12],a[13],p)];if(st_cp)	p.par.sub=p;p.zind=!st_cp?1000:stgpar(p.par).zind+1;p.pbgd=stgbg(p.pbgc,p.pbgi,p.pbgr);if(nIEW)p.effn=[p.peff[0]?p.peff[0].split(" ").length:0,p.peff[1]?p.peff[1].split(" ").length:0];p.pwd=0;p.pht=0;eval(l+"=p");}
function stm_bpx(l,r,a){var p=eval(r);stm_bp(l,(a.length?a.concat(p.args.slice(a.length)):p.args));}
function stm_ai(l,a){st_ci=st_ms[st_cm].ps[st_cp].is.length;var m=st_ms[st_cm],p=m.ps[st_cp],i;if(a[0]==6)i={ssiz:a[1],ibgc:[a[2]],simg:stbuf(stgsrc(a[3],1)),simw:a[4],simh:a[5],simb:a[6],args:a.slice(0)};else i={itex:a[0]?a[1]:a[1].replace(/ /g,"&nbsp;"),iimg:[stbuf(stgsrc(a[2],0)),stbuf(stgsrc(a[3],0))],iimw:a[4],iimh:a[5],iimb:a[6],iurl:(!a[7]||stabs(a[7])?(a[7].toLowerCase().indexOf("javascript:")?a[7]:a[7]+";void(0);"):m.mpre+a[7]),itgt:a[8]?a[8]:"_self",istt:a[9],itip:a[10].replace(/"/g,"&quot;"),iicn:[stbuf(stgsrc(a[11],1)),stbuf(stgsrc(a[12],1))],iicw:a[13],iich:a[14],iicb:a[15],iarr:[stbuf(stgsrc(a[16],1)),stbuf(stgsrc(a[17],1))],iarw:a[18],iarh:a[19],iarb:a[20],ihal:stHAL[a[21]],ival:stVAL[a[22]],ibgc:nOP5&&nVER<7&&a[24]&&a[26]?["transparent","transparent"]:[nOP5&&nVER<7||!a[24]?a[23]:"transparent",nOP5&&nVER<7||!a[26]?a[25]:"transparent"],ibgi:[stbuf(stgsrc(a[27],a[28]&&!nNN4)),stbuf(stgsrc(a[28],a[27]&&!nNN4))],ibgr:[stREP[a[29]],stREP[a[30]]],ibds:stBDS[a[31]],ipbw:a[32],ibdc:(!nDM||nNN4)?[a[33].split(/\s/gi)[0],a[34].split(/\s/gi)[0]]:[a[33],a[34]],itxc:[a[35],a[36]],itxf:[a[37],a[38]],itxd:[stgdec(a[39]),stgdec(a[40])],args:a.slice(0)};p.is[st_ci]=i;i.ityp=a[0];i.mei=st_cm;i.ppi=st_cp;i.iti=st_ci;i.ids=p.ids+st_ci+"e";i.sub=0;i.tmid=0;i.iwd=arguments.length>2?arguments[2]:0;i.iht=arguments.length>3?arguments[3]:0;i.cstt=0;i.lock=0;if(m.midn&1)sthili(m,i);eval(l+"=i");}
function stm_aix(l,r,a){var i=eval(r),iwd=arguments.length>3?arguments[3]:0,iht=arguments.length>4?arguments[4]:0;stm_ai(l,(a.length?a.concat(i.args.slice(a.length)):i.args),iwd,iht)}
function stm_ep(){var m=st_ms[st_cm],p=m.ps[st_cp],i=p.par;if(i)st_cm=i.mei,st_cp=i.ppi,st_ci=i.iti;if(!p.is.length){m.ps.length--;if(i){i.sub=0;i.iarr=[m.mbnk,m.mbnk];}}}
function stm_em(){if(!st_cm)stsetld();var m=st_ms[st_cm];if(!m.ps.length){--st_ms.length;return;}var mh="",mc="<STYLE TYPE='text/css'>\n";for(var n=nDM?m.ps.length:1,j=0;j<n;++j){var p=m.ps[j],ph=(p.isst?"<TABLE STYLE='border:none;padding:0px' CELLPADDING=0 CELLSPACING=0"+(m.maln=="left"?"":" align="+m.maln)+" "+(m.mwid?"width="+(m.mwid.charAt(m.mwid.length-1)=="%"?m.mwid:(parseInt(m.mwid)+2*p.psds)):"")+"><TD class=st_tdcss>":"")+stpbtx(p);if(!p.pver) ph+="<TR id="+p.ids+"TRR>";if(stissc(p))ph+=stsctx(p,0);for(var k=0;k<p.is.length;++k){var i=p.is[k];if(i.ityp!=6)i.ibgd=[stgbg(i.ibgc[0],i.ibgi[0],i.ibgr[0]),stgbg(i.ibgc[1],i.ibgi[1],i.ibgr[1])];ph+=p.pver?"<TR ID="+p.ids+i.iti+"TRR>"+stittx(i)+"</TR>":stittx(i);if(i.ityp!=6)mc+="."+i.ids+"TX0{"+sttcss(i,0)+"}\n."+i.ids+"TX1{"+sttcss(i,1)+"}\n";}if(stissc(p))ph+=stsctx(p,1);if(!p.pver) ph+="</TR>";ph+=stpetx(p);if(p.isst)ph+="</TD></TABLE>";if(p.isst||nNN||nKQ2||!nDM)mh+=ph;else st_ht+=ph;}mc+="</STYLE>";if(!nDM||nNN4)document.write(mc);if(mh)document.write(mh);if(nOP5||nIEW&&nVER>=5){if(st_ht){var o=stgobj("st_gl"+st_gc);if(nOP)o.document.write(st_ht);else if(nIE)o.insertAdjacentHTML("BeforeEnd",st_ht);st_gc++;st_ht="";}if(nIE)stpre(m);}st_cm++;st_cp=0;st_ci=0;}
function stpbtx(p){var m=stgme(p);with(p){if(!ppi&&(!isst||pver)) m.mwid="";	if(nNN4||!nDM){var s=(isst?"<ILAYER":"<LAYER LEFT=0 TOP=0")+" VISIBILITY=hide ID="+ids+" Z-INDEX="+zind+"><LAYER><TABLE BORDER=0 CELLSPACING=0 CELLPADDING="+pspc+" BACKGROUND='"+pbgi+"' BGCOLOR="+(pbgi||pbgc=="transparent"?"''":pbgc)+(isst&&m.mwid?" width=100%><td align="+m.maln+">":"><td>")+"<table cellpadding=0 cellspacing=0 border=0><tbody>";return s;}var s=(isst?"<TABLE class=st_tbcss CELLPADDING=0 CELLSPACING="+psds:"<DIV class=st_divcss");s+=stppev(p)+(isst&&m.mwid?" width=100%":"")+" ID="+ids+" STYLE='"+(nIEM?"width:1px;":"")+(nIEW?"filter:"+stfcss(p)+";":"")+"position:"+(p.isst?"static":"absolute;"+(nOP&&nVER<7||stDRTL?"":"left:-9999px;top:-9999px"))+";z-index:"+zind+";visibility:hidden;'>";s+=(isst?"<TD NOWRAP class=st_tdcss ID="+ids+"TTD>":"");if(nNN||isst)s+="<TABLE class=st_tbcss cellpadding=0 cellspacing=0 "+(isst&&m.mwid?"width=100%":"")+" style='"+stpcss(p)+"' ID="+ids+"TBB><td class=st_tdcss"+(isst&&m.mwid?" id="+ids+"TBBD><table style='border:none;padding:0px;' align="+m.maln:"><table class=st_tbcss")+" CELLSPACING="+(stissc(p)?0:pspc)+" CELLPADDING=0 ID="+ids+"TB"+(pwd?" width="+pwd:"")+(pht?" height="+pht:"")+"><TBODY ID="+ids+"TBDB>";else s+="<TABLE class=st_tbcss CELLSPACING="+(stissc(p)?0:pspc)+" CELLPADDING=0 style='"+stpcss(p)+"' ID="+ids+"TB"+(pwd?" width="+(pwd-2*ipbw):"")+(pht?" height="+(pht-2*ipbw):"")+"><TBODY ID="+ids+"TBDB>";return s;}}
function stpetx(p){return "</TBODY></TABLE>"+(nNN4||!nDM?"</td></table></LAYER>"+(p.isst?"</ilayer>":"</LAYER>"):(nNN||p.isst?"</TD></TABLE>":"")+(p.isst?"</TD></TABLE>":"</DIV>"));}
function stittx(i){var s="",p=stgpar(i);with(i)if(nNN4||!nDM){s+="<TD WIDTH=1 NOWRAP><font style='font-size:1pt'><ILAYER ID="+ids+"><LAYER";if(ityp!=6&&ipbw)s+=" BGCOLOR="+ibdc[0];s+=">";for(var n=0;n<(nNN4?2:1);++n){if(ityp==6&&n)break;s+="<LAYER Z-INDEX=10 VISIBILITY="+(n?"HIDE":"SHOW");			if(ityp!=6)s+=" LEFT="+ipbw+" TOP="+ipbw;s+=">";if(ityp!=6&&ipbw)s+="<table width=100% cellpadding=0 cellspacing=0 border=0 bgcolor="+ibdc[n]+"><td width=100%>";s+="<TABLE WIDTH="+(iwd&&ityp!=6?iwd:"100%")+(iht&&(ityp!=6||!p.pver)?" height="+iht:"")+" border=0 CELLSPACING=0 CElLLPADDING="+(ityp!=6?p.ppad:0);if(ityp==6)s+=" BACKGROUND='' BGCOLOR='"+(ibgc[n]=="transparent"?"":ibgc[n])+"'";else s+=" BACKGROUND='"+ibgi[n]+"' BGCOLOR="+(ibgi[n]||ibgc[n]=="transparent"?"''":ibgc[n]);s+=">";if(ityp==6)s+="<TD NOWRAP VALIGN=TOP HEIGHT="+(p.pver?ssiz:"100%")+" WIDTH="+(p.pver?"100%":ssiz)+">"+stgimg(simg,ids+"LINE",simw,simh,0,-1)+"</TD>";else{if(p.pver&&p.plmw||!p.pver&&iicw)s+="<TD align=left VALIGN=middle"+stgiws(i)+">"+stgimg(iicn[n],"",iicw,iich,iicb,1)+"</TD>";s+="<TD NOWRAP ALIGN="+ihal+" VALIGN="+ival+"><A "+(nNN4?"":stgurl(i,1))+" CLASS='"+(ids+"TX"+n)+"'>";if(ityp==2)s+=stgimg(iimg[n],ids+"IMG",iimw,iimh,iimb,-1);else s+="<IMG SRC='"+stgme(i).mbnk+"' WIDTH=1 HEIGHT=1 BORDER=0 ALIGN=ABSMIDDLE>"+itex;s+="</A></TD>";if(p.pver&&p.prmw||!p.pver&&iarw)s+="<TD ALIGN=right VALIGN=middle"+stgaws(i)+">"+stgimg(iarr[n],"",iarw,iarh,iarb,1)+"</TD>";}if(ityp!=6&&ipbw)s+="</TABLE></td><td><IMG SRC='"+stgme(i).mbnk+"' WIDTH="+ipbw+" HEIGHT=1 BORDER=0 ALIGN=ABSMIDDLE></td><tr><td><IMG SRC='"+stgme(i).mbnk+"' WIDTH=1 HEIGHT="+ipbw+" BORDER=0 ALIGN=ABSMIDDLE></td><td><IMG SRC='"+stgme(i).mbnk+"' WIDTH=1 HEIGHT="+ipbw+" BORDER=0 ALIGN=ABSMIDDLE></td></tr>";s+="</table>";s+="</LAYER>";}if(ityp!=6)s+="<LAYER Z-INDEX=20></LAYER>";s+="</LAYER></ILAYER></font></TD>";}else{s+="<TD class=st_tdcss ID="+i.ids+stitev(i);if(ityp!=6)s+=" TITLE="+stquo(itip)+" VALIGN="+ival;s+=" STYLE='";if(!(ityp!=6&&stmozb||nOP&&nVER<6))s+=sticss(i,0);s+="'>";if(ityp==6){s+="<table class=st_tbcss cellpadding=0 cellspacing=0 width=100% ID="+i.ids+"SA><td class=st_tdcss NOWRAP align=center valign=middle"+(p.pver?" width=100% STYLE='"+sticss(i,0)+"' height=":" width=")+ssiz+" ID="+i.ids+"SB>";s+=stgimg(simg,ids+"LINE",simw,simh,0,-1);s+="</td></table>";}else{var s1="<DIV CLASS=st_divcss"+(stmozb||nOP&&nVER<6?" STYLE='"+sticss(i,0)+"'":"")+" ID="+i.ids+"DR>";s+=nKQ2||nOP&&nVER<6?s1:"";s+="<A class=st_acss ID="+i.ids+"HR STYLE='text-decoration:none;"+(nIEW?"cursor:"+stgcur(i):"")+"' "+stgurl(i,0)+">";s+=nNN?s1:"";s+="<TABLE CELLSPACING=0 CELLPADDING=0 WIDTH="+(iwd?iwd:"100%")+(iht?" HEIGHT="+iht:"")+" ID="+ids+"TB style='border:none;padding:0;' align=center>";if(p.pver&&p.plmw||!p.pver&&iicw)s+="<TD class=st_tdcss NOWRAP ALIGN=left VALIGN=middle STYLE='padding:"+p.ppad+"px' ID="+ids+"LTD"+stgiws(i)+">"+stgimg(iicn[0],ids+"ICON",iicw,iich,iicb,1)+"</TD>";s+="<TD CLASS=st_tdcss VALIGN="+ival+" NOWRAP STYLE='text-align:"+ihal+";color:"+itxc[0]+";padding:"+p.ppad+"px;' ID="+ids+"MTD>";s+="<FONT CLASS=st_ftcss ID="+ids+"TX STYLE=\""+sttcss(i,0)+"\">";if(ityp==2)s+=stgimg(iimg[0],ids+"IMG",iimw,iimh,iimb,-1);else if(itex)s+=itex;else s+=stgimg(stgme(i).mbnk,ids+"IMG",1,1,0,1);s+="</FONT>";s+="</TD>";if(p.pver&&p.prmw||!p.pver&&iarw)s+="<TD class=st_tdcss NOWRAP ALIGN=right VALIGN=middle STYLE='padding:"+p.ppad+"px;' ID="+ids+"RTD"+stgaws(i)+">"+stgimg(iarr[0],ids+"ARROW",iarw,iarh,iarb,1)+"</TD>";s+="</TABLE>";s+=nNN?"</DIV>":"";s+="</A>";s+=nKQ2||nOP&&nVER<6?"</DIV>":"";}s+="</TD>";}return s;}
function stpcss(p){with(p)return "border-style:"+pbds+";border-width:"+ipbw+"px;border-color:"+pbdc+";"+(nIE?"background:"+pbgd+";":"background-color:"+pbgc+";"+(pbgi?"background-image:url("+pbgi+");background-repeat:"+pbgr+";":""))+(nIEW&&!p.isst?"margin:"+psds+"px;":";");}
function stfcss(p){var s="";with(p)if(nIEW&&(nVER>=5||!isst)){s+=peff[0]+" ";s+=peff[1]+" ";if(nIE5||popc!=100)s+="Alpha(opacity="+popc+") ";if(psds)s+=pstp==1?"dropshadow(color="+pscl+",offx="+psds+",offy="+psds+",positive=1) ":"Shadow(color="+pscl+",direction=135,strength="+psds+") ";}return s;}
function sticss(i,n){with(i)return (ityp!=6?"border-style:"+ibds+";border-width:"+ipbw+"px;border-color:"+ibdc[n]+";"+(!nIEM&&ibgi[n]?"background-image:url("+ibgi[n]+");background-repeat:"+ibgr[n]+";":""):"")+(nIEM&&ityp!=6?"background:"+ibgd[n]+";":"background-color:"+ibgc[n]+";")+"cursor:"+(nIEM?"default":stgcur(i))+";font-size:1px;";}
function sttcss(i,n){with(i)return "cursor:"+stgcur(i)+";font:"+itxf[n]+";text-decoration:"+itxd[n]+";"+(!nDM||nNN4||nIE5?"background-color:transparent;color:"+itxc[n]:"");}
function stgtm(m,w){if(w&&w!=window&&stdmld(w)){var t=w.stmenu(m.mnam);if(t){t.sfrm=window;if(t.mhdd<1000)	t.mhdd=1000;}return t;}return m;}
function stitov(e,o,i){var p=stgpar(i);if(!p.issh||o&&nIE&&e.fromElement&&o.contains(e.fromElement)||nOP&&e.fromElement&&e.fromElement.id&&e.fromElement.id.indexOf(i.ids)>=0)return;if(nNN4)stglay(i).document.layers[0].captureEvents(Event.CLICK);var m=stgme(i),t=m,w=window;if(!p.par){w=stgfrm(m);t=stgtm(m,w);}if(!p.isck||m.cked){if(p.cuit&&p.cuit!=i){var c=p.cuit;sthdit(c);if(t!=m&&t)w.sthdit(t.ps[c.ppi].is[c.iti]);}if(typeof(i.myitov)!="undefined"&&i.myitov(e))return;stshpx(t,m,i,w);stshst(i,1);stgpar(i).cuit=i;}else if(t.mcks&2)stshst(i,1);if(nNN4&&i.istt)stcstt(i);}
function stitou(e,o,i){var p=stgpar(i);if(!p.issh||nIE&&e.toElement&&o.contains(e.toElement)||nOP&&e.toElement&&e.toElement.id&&e.toElement.id.indexOf(i.ids)>=0)return;if(nNN4)stglay(i).document.layers[0].releaseEvents(Event.CLICK);var m=stgme(i),t=m,w=window;if(!p.par){w=stgfrm(m);t=stgtm(m,w);}if(typeof(i.myitou)!="undefined"&&i.myitou(e))return;p=i.sub;var tp=t!=m&&t?t.ps[i.ppi].is[i.iti].sub:0;if(p&&p.issh&&!p.exed)sthdpp(p);if(tp&&tp.issh&&!tp.exed)w.sthdpp(tp);if(!(p&&p.issh||tp&&tp.issh)){stshst(i,0);stgpar(i).cuit=0;}if(nNN4&&i.istt)status="";}
function stitck(e,o,i){if(i.lock||nNN4&&e.which!=1)return;if(typeof(i.myitck)!="undefined"&&i.myitck(e))return;var m=stgme(i),t=m,w=window;if(!stgpar(i).par){w=stgfrm(m);t=stgtm(m,w);}var p=stgpar(i);if(p.isck){m.cked=!m.cked;var p=i.sub;if(p){if(m.cked&&!p.issh)stshpx(t,m,i,w);else if(!m.cked&&p.issh){var tp=t!=m&&t?t.ps[i.ppi].is[i.iti].sub:0;if(tp)w.sthdpp(tp);sthdpp(p);}}if(!(t.mcks&2))stshst(i,m.cked?1:0);stgpar(i).cuit=m.cked?i:0;}if(i.iurl&&m.sfrm!=window)sthdalx(m,0);if(nKQ2&&i.iurl){window.open(i.iurl,i.itgt);}if(nIEW&&i.iurl){var a=stgobj(i.ids+"HR");i.lock=1;if(e.shiftKey)a.target='_blank';a.click();a.target=i.itgt;i.lock=0;}}
function stppov(e,o,p){if(!p.issh||nIE&&e.fromElement&&o.contains(e.fromElement)||nOP&&e.fromElement&&e.fromElement.id&&e.fromElement.id.indexOf(p.ids)>=0)return;var m=stgme(p),w=m.sfrm;if(p.par&&w!=window){if(stdmld(w))m=w.stmenu(m.mnam);else return;}if(m.hdid){w.clearTimeout(m.hdid);m.hdid=0;}}
function stppou(e,o,p){if(!p.issh||nIE&&e.toElement&&o.contains(e.toElement)||nOP&&e.toElement&&e.toElement.id&&e.toElement.id.indexOf(p.ids)>=0)return;var m=stgme(p),w=m.sfrm;if(p.par&&w!=window){if(stdmld(w))m=w.stmenu(m.mnam);else{sthdalx(m,0);return;}}if(m.hdid)w.clearTimeout(m.hdid);m.hdid=w.setTimeout("sthdall(st_ms['"+m.mei+"'],0);",m.mhdd);}
function stshst(i,n){if(i.cstt==n)return;if(typeof(i.myshst)!="undefined"&&i.myshst(n))return;i.cstt=n;with(i)if(nNN4){var ls=stgstlay(i);ls[n].parentLayer.bgColor=ibdc[n];ls[n].visibility="show";ls[1-n].visibility="hide";}else{var o=stmozb?stgobj(i.ids+"DR"):stglay(i),s=o.style;if(nIEM){if(ibgd[0]!=ibgd[1])	s.background=ibgd[n];}else{if(ibgc[0]!=ibgc[1]){if(nOP&&nVER<6)s.background=ibgc[n];else s.backgroundColor=ibgc[n];}if(ibgi[0]!=ibgi[1])	s.backgroundImage="url("+(ibgi[n]?ibgi[n]:stgme(i).mbnk)+")";s.backgroundRepeat=ibgr[n];}if(ibdc[0]!=ibdc[1])	s.borderColor=ibdc[n];var t;if(iicn[0]!=iicn[1]){t=nIE?o.all[ids+"ICON"]:stgobj(ids+"ICON");if(t)	t.src=iicn[n];}if(iarr[0]!=iarr[1]){t=nIE?o.all[ids+"ARROW"]:stgobj(ids+"ARROW");if(t)	t.src=iarr[n];}if(ityp==2&&iimg[0]!=iimg[1]){t=nIE?o.all[ids+"IMG"]:stgobj(ids+"IMG");if(t)	t.src=iimg[n];}if(!i.txstyle)	i.txstyle=(nIE?o.all[ids+"TX"]:stgobj(ids+"TX")).style;t=txstyle;if(itxf[0]!=itxf[1])t.font=itxf[n];if(itxd[0]!=itxd[1])t.textDecoration=itxd[n];if(nOP)	stgobj(ids+"MTD").style.color=itxc[n];else	t.color=itxc[n];if(nOP&&nVER>7)with(stglay(stgpar(i)).style){var v=visibility;visibility="hidden";visibility=v;}}}
function stshpp(p){if(typeof(p.myshpp)!="undefined"&&p.myshpp())return;stshow(p);}
function stshpx(t,m,i,w){if(t==m){var p=i.sub;if(p&&!p.issh&&!(!i.ppi&&m.mcff&&!m.mcfn))stshpp(p);}else if(t){var p=t.ps[i.ppi].is[i.iti].sub;if(p&&!p.issh)w.stshpp(p);}}
function sthdpp(p){if(typeof(p.myhdpp)!="undefined"&&p.myhdpp())return;if(p.cuit){var t=p.cuit.sub;if(t&&t.issh)sthdpp(t);stshst(p.cuit,0);p.cuit=0;}sthide(p);}
function stshit(i){var p=i.sub;if(p&&!p.issh)stshpp(p);stshst(i,1);stgpar(i).cuit=i;}
function sthdit(i){var p=i.sub;if(p&&p.issh)sthdpp(p);stshst(i,0);stgpar(i).cuit=0;}
function stshow(p){var d=p.par&&stgpar(p.par).pver?stgme(p).msdv:stgme(p).msdh;p.exed=0;if(typeof(p.rc)=="undefined")stgxy(p);if(p.tmid){clearTimeout(p.tmid);p.tmid=0;stwels(1,p)}if(d>0)p.tmid=setTimeout(stsdstr(p,1),d);p.issh=1;if(d<=0)eval(stsdstr(p,1));}
function sthide(p){if(p.tmid){clearTimeout(p.tmid);p.tmid=0;}if(p.issh&&!p.exed){p.exed=0;p.issh=0;}else{p.exed=0;p.issh=0;eval(stsdstr(p,0));}}
function stshx(p){if(nNN4){stnshx(p);return;}var l=stglay(p);l.style.visibility="visible";if(nIE5)l.filters["Alpha"].opacity=p.popc;}
function stnshx(p){var l=stglay(p);l.visibility="show";if(!p.fixed){l.resizeBy(p.ipbw*2,p.ipbw*2);l=l.document.layers[0];l.moveTo(p.ipbw,p.ipbw);l.onmouseover=stppovn;l.onmouseout=stppoun;for(var j=p.is.length-1;j>=0;--j){var i=p.is[j];if(i.ityp!=6){var ls=stgstlay(i);if(i.ityp!=1||i.iurl)ls[2].resizeTo(ls[0].parentLayer.clip.width,ls[0].parentLayer.clip.height);if(i.iurl){with(ls[2].document){open();write("<A "+stgurl(i,0)+"><IMG BORDER=0 SRC='"+stgme(i).mbnk+"' WIDTH="+ls[2].clip.width+" HEIGHT="+ls[2].clip.height+"></A>");close();}}ls[0].resizeBy(-i.ipbw,-i.ipbw);ls[1].resizeBy(-i.ipbw,-i.ipbw);l=stglay(i).document.layers[0];l.onmouseover=stitovn;l.onmouseout=stitoun;l.onclick=stitckn;}}if(p.ipbw)setTimeout("var p=st_ms["+p.mei+"].ps["+p.ppi+"];stglay(p).bgColor=p.pbdc;",1);p.fixed=1;}}
function sthdx(p){var l=stglay(p);if(nNN4)l.visibility="hide";else{if(nIE5)l.filters["Alpha"].opacity=0;l.style.visibility="hidden";}}
function stcls(){for(var i=0;i<st_ms.length;++i)sthdalx(st_ms[i],0);}
function sthdalx(m,f){var w=m.sfrm;if(w!=window){if(stdmld(w)){var t=w.stmenu(m.mnam);if(t)w.sthdall(t,f);}else{for(var i=0;i<m.ps[0].is.length;++i){var p=m.ps[0].is[i].sub;if(p&&p.issh){sthdpp(p);break;}}}}else sthdall(m,f);}
function sthdall(m,f){var t=m,w;if(m.mcff){w=stgfrm(m);if(w&&w!=window&&stdmld(w)){t=w.stmenu(m.mnam);if(typeof(t)=="object"&&t)t.sfrm=window;}}if(m.hdid){clearTimeout(m.hdid);m.hdid=0;}m.cked=0;var p=m.ps[0];if(p.issh){var i=p.cuit;if(p.cuit){sthdit(i);if(t!=m){var p=t.ps[i.ppi].is[i.iti].sub;if(p&&p.issh)w.sthdpp(p);}} if(m.mtyp==2&&(f||stAHCM))sthide(p);}}
function stgeff(f,i,s,p){return nVER<5.5?(!p.isst||nVER>=5)&&i<24&&i>=0?"revealTrans(Transition="+i+",Duration="+((110-s)/100)+")":"":f=="Normal"?"":f;}
function stftsh(p){if(nIEW&&nVER>=5.5)eval("try{stshfx(p);}catch(e){st_reg=0;stshfx(p);}");else stshfx(p);}
function stfthd(p){if(nIEW&&nVER>=5.5)eval("try{sthdfx(p);}catch(e){st_reg=0;sthdfx(p);}");else sthdfx(p);}
function stshfx(p){var xy=stgxy(p);if(stissc(p))stssc(xy[2],p);stmvto(xy,p);stwels(-1,p);if(nIEW&&st_reg){var ts=stglay(p).filters;for(var i=0,j=i+p.effn[0];i<j;++i){if(ts[i].status)ts[i].stop();ts[i].apply();}}stshx(p);if(nIEW&&st_reg){var ts=stglay(p).filters;for(var i=0,j=i+p.effn[0];i<j;++i)ts[i].play();}}
function sthdfx(p){if(nIEW&&st_reg){var ts=stglay(p).filters;for(var i=p.effn[0],j=i+p.effn[1];i<j;++i){if(ts[i].status)ts[i].stop();ts[i].apply();}}sthdx(p);stwels(1,p);if(nIEW&&st_reg){var ts=stglay(p).filters;for(var i=p.effn[0],j=i+p.effn[1];i<j;++i)ts[i].play();}}
function ststxy(m,xy){m.mcox=xy[0];m.mcoy=xy[1];}
function stnav(){var v=navigator.appVersion,a=navigator.userAgent;nMAC=v.indexOf("Mac")>=0;if((nKQ=(typeof(navigator.product)!="undefined"&&navigator.product=="Konqueror/khtml"))){nVER=parseFloat(v);nKQ2=1;stmozb=1;}else if((nOP=a.indexOf("Opera")>=0)){nVER=parseFloat(a.substring(Math.max(a.indexOf("Opera/"),a.indexOf("Opera "))+6,a.length));nOP5=nVER>=5;}else if((nIE=document.all?1:0)){nIE4=(eval(v.substring(0,1))>=4);nVER=parseFloat(a.substring(a.indexOf("MSIE ")+5,a.length));nIE5=nVER>=5&&nVER<5.5&&!nMAC;nIEM=nIE4&&nMAC;nIEW=nIE4&&!nMAC;st_ascr=nIEW&&nVER>=5;}else if((nNN4=navigator.appName.toLowerCase()=="netscape"&&v.substring(0,1)=="4")){nVER=parseFloat(v);}else if((nNN6=(document.getElementsByTagName("*")&&a.indexOf("Gecko")!=-1))){nVER=parseInt(navigator.productSub);if(a.indexOf("Netscape")>=0){st_delb=nVER<=20001108;st_addb=nVER>=20020512;}else{stmozb=nVER<20010505&&nVER>20001205;st_delb=nVER<=20010628;st_addb=nVER>=20011221&&nVER<20021016;}st_ascr=nVER>=20040804;}nNN=nNN4||nNN6;nDM=nOP5||nIE4||nNN||nKQ2;}
function stckpg(){st_rl=0;var w=st_cw,h=st_ch,l=st_cl,t=st_ct;st_cw=stgcw();st_ch=stgch();st_cl=stgcl();st_ct=stgct();st_scd=st_cl-l||st_ct-t;if((st_cw-w||st_ch-h)&&(nOP&&nVER<7||nNN4))document.location.reload();else{if(!nIEM)stscr();st_rl=setTimeout("stckpg();",25);}}
function st_onload(){if(st_load)	return;if(nIEM||nOP5||nNN||nKQ2||nIEW&&nVER<5){if(st_ht)document.body.insertAdjacentHTML("BeforeEnd",st_ht);for(var j=0;j<st_ms.length;++j)stpre(st_ms[j]);}st_load=1;for(var i=stusrld.length-1;i>=0;--i){stusrld[i]();}stusrld.length=0;for(var j=0;j<st_ms.length;++j){var m=st_ms[j];for(var k=0;k<m.ps.length;++k){var p=m.ps[k];if(p.issh&&p.exed)stwels(-1,p);}if(typeof(m.myload)!="undefined")m.myload();}}
function stpre(m){var p=m.ps[m.ps.length-1],i=p.is[p.is.length-1];while(1)if(stglay(i)) break;if(!nNN4)stfix(m);if(m.mtyp!=2)stshow(m.ps[0]);if(nIEM)onscroll=onresize=new Function("if(st_scr)clearTimeout(st_scr);st_scr=setTimeout('stscr();',500);");else if(!st_rl){st_cw=stgcw();st_ch=stgch();st_cl=stgcl();st_ct=stgct();st_rl=setTimeout("stckpg();",25);}m.ready=1;}
function stfix(m){for(var j=0;j<m.ps.length;++j){var p=m.ps[j],l=stglay(p);if(!p.isst&&(nOP&&nVER>=7||nNN6))document.body.appendChild(l);if(!m.mtyp&&p.isst&&m.mwid){if(nIEM)l.style.width=l.width;continue;}if(nOP&&nVER<6)l.style.pixelWidth=parseInt(stgobj(p.ids+"TB").style.pixelWidth);if(nIEW&&nVER<5||nNN6)l.style.width=parseInt(stgobj(p.ids+"TB").offsetWidth);if(nIE5)		l.style.width=l.offsetWidth;}}
function stgsp(sp,d){var i=0,s=5;if(d<s||nIEM||!stSMSC)return d;d=(d-d%s)/s;while(d>0)d-=++i;return Math.min(Math.min(i*s,sp+s),100*s);}
function stscr(){for(var j=0;j<st_ms.length;++j){var m=st_ms[j];if(m.mtyp==1){var p=m.ps[0],o=stgobj(p),xy=stgxy(p),rc=stgrc(p);if(typeof(p.scxs)=='undefined')p.scxs=0;if(typeof(p.scys)=='undefined')p.scys=0;var dx=xy[0]-rc[0],dy=xy[1]-rc[1];if(dx||dy){if(stAHWS)	sthdall(m,0);stwels(1,p);p.scxs=stgsp(p.scxs,Math.abs(dx));p.scys=stgsp(p.scys,Math.abs(dy));var x=dx>0?rc[0]+p.scxs:rc[0]-p.scxs,y=dy>0?rc[1]+p.scys:rc[1]-p.scys;stmvto([x,y],p);if(stissc(p))stssc(stgsc(x,y,p),p);stwels(-1,p);}else{p.scxs=p.scys=0;if(stissc(p)){stwels(1,p);stssc(stgsc(xy[0],xy[1],p),p);stwels(-1,p);}}}else if(st_scd&&stAHWS&&m.sfrm!=window)sthdalx(m,0);}}
function stmvto(xy,p){if(xy&&(p.par||stgme(p).mtyp)){var l=stglay(p);if(nNN4)l.moveToAbsolute(xy[0],xy[1]);else if(nOP){var s=l.style;s.pixelLeft=xy[0];s.pixelTop=xy[1];}else{var s=l.style;s.left=xy[0]+"px";s.top=xy[1]+"px";}p.rc=[xy[0],xy[1],p.rc[2],p.rc[3]];}}
function stsdstr(p,s){return	"var p=st_ms["+p.mei+"].ps["+p.ppi+"];p.tmid=0;"+(s?"stftsh(":"stfthd(")+"p);p.exed=1;";}
function stevfn(n,i){return new Function("e","var r=/Stm(\\d*)p(\\d*)i"+(i?"(\\d*)e":"")+"/;r.exec(this.parentLayer.id);var m=RegExp.$1;var p=parseInt(RegExp.$2);"+(i?"var i=parseInt(RegExp.$3);":"")+"return "+n+"(e,this,st_ms[m].ps[p]"+(i?".is[i]":"")+");");}
function stppev(p){return " onMouseOver='stppov(event,this,st_ms["+p.mei+"].ps["+p.ppi+"]);' onMouseOut='stppou(event,this,st_ms["+p.mei+"].ps["+p.ppi+"]);'";}
function stitev(i){with(i)return ityp==6?"":" onMouseOver='stitov(event,this,st_ms["+mei+"].ps["+ppi+"].is["+iti+"]);' onMouseOut='stitou(event,this,st_ms["+mei+"].ps["+ppi+"].is["+iti+"]);' onClick='stitck(event,this,st_ms["+mei+"].ps["+ppi+"].is["+iti+"]);'";}
function stquo(n){return "\""+n+"\"";}
function stgurl(i,f){with(i)return (iurl||f?"HREF="+stquo(iurl?iurl.replace(/"/g,"&quot;").replace(/'/g,"&#39;"):"#")+(iurl&&itgt?" TARGET="+stquo(itgt):""):"")+(istt?" onMouseOver='return stcstt(st_ms["+mei+"].ps["+ppi+"].is["+iti+"]);' onMouseOut=\"top.status=\'\';return true;\"":"");}
function stcstt(i){top.status=i.istt;return true;}
function stgdec(v){return v?(v&1?"underline ":"")+(v&2?"line-through ":"")+(v&4?"overline":""):"none";}
function stgimg(src,id,w,h,b,f){var x=w?w:f,y=h?h:f;return "<IMG SRC="+stquo(src)+(id?" ID="+id:"")+(w>0?" WIDTH="+w:"")+(h>0?" HEIGHT="+h:"")+" BORDER="+b+">";}
function stgbg(c,i,r){return i?c+" url("+i+") "+r:c;}
function stgcur(i){return i.ityp!=6&&(i.iurl||stgpar(i).isck&&i.sub)?(nNN6||nKQ2?"pointer":"hand"):"default";}
function stgiws(i){var p=stgpar(i);return p.pver?(p.plmw>0?" WIDTH="+p.plmw:""):(i.iicw>0?" WIDTH="+(i.iicw+2*i.iicb):"");}
function stgaws(i){var p=stgpar(i);return p.pver?(p.prmw>0?" WIDTH="+p.prmw:""):(i.iarw>0?" WIDTH="+(i.iarw+2*i.iarb):"");}
function stgme(ip){var p=st_ms[ip.mei].ps[ip.ppi];while(p.par)p=stgpar(p.par);return st_ms[p.mei];}
function stgpar(ip){return st_ms[ip.mei].ps[ip.ppi];}
function stgcl(){return nIE?(nIEW&&document.compatMode=="CSS1Compat"?document.documentElement:document.body).scrollLeft:pageXOffset;}
function stgct(){return nIE?(nIEW&&document.compatMode=="CSS1Compat"?document.documentElement:document.body).scrollTop:pageYOffset;}
function stgcw(){return nIE?(nIEW&&document.compatMode=="CSS1Compat"?document.documentElement:document.body).clientWidth:innerWidth;}
function stgch(){return nIE?(nIEW&&document.compatMode=="CSS1Compat"?document.documentElement:document.body).clientHeight:innerHeight;}
function stgobj(id){with(document)return nIE&&nVER<5?all[id]:nNN4?layers[id]:getElementById(id);}
function stglay(ip){if(!ip.layer)ip.layer=!stisit(ip)||nNN6||nKQ2||nOP5?stgobj(ip.ids):nNN4?stglay(stgpar(ip)).document.layers[0].document.layers[ip.ids]:stglay(stgpar(ip)).all.tags("td")[ip.ids];return ip.layer;}
function stgstlay(i){return stglay(i).document.layers[0].document.layers;}
function stgrc(ip){var ly=stglay(ip);if(nNN4)return [ly.pageX,ly.pageY,ly.clip.width,ly.clip.height];else{var l=0,t=0,w=typeof(ip.rc)=="undefined"?parseInt(nOP&&nVER<7?ly.style.pixelWidth:ly.offsetWidth):ip.rc[2],h=typeof(ip.rc)=="undefined"?parseInt(nOP&&nVER<7?ly.style.pixelHeight:ly.offsetHeight):ip.rc[3];while(ly){l+=parseInt(ly.offsetLeft);t+=parseInt(ly.offsetTop);if(nIEW&&stisit(ip)&&ly.id==stgpar(ip).ids+"SC"){l-=ly.scrollLeft;t-=ly.scrollTop;}ly=(nKQ2||navigator.appVersion.indexOf("Safari")>=0)&&ly.style&&ly.style.position&&ly.style.position.toLowerCase()=="absolute"?0:ly.offsetParent;}if(st_ascr&&nNN6&&stisit(ip)&&(ly=stgobj(stgpar(ip).ids+"SC"))){				l-=ly.scrollLeft;t-=ly.scrollTop;}if(stisit(ip)){var p=stgpar(ip);if(st_delb){l-=ip.ipbw;t-=ip.ipbw;}if(st_addb){var w=p.ipbw;l+=w;t+=w;}if(nIEM){for(var ly=stgobj((p.pver?p.ids+ip.iti:p.ids)+"TRR"),t=0;ly;ly=ly.offsetParent)t+=parseInt(ly.offsetTop);l+=parseInt(document.body.leftMargin);}else if(nNN&&p.pver)w=parseInt(stgobj(ip.ids+"DR").offsetWidth)+2*ip.ipbw;}else if(nIEM)w=parseInt(stglay(ip).offsetWidth)-ip.ipbw;if(stDRTL&&nIEW&&nVER<6&&nVER>5)l-=stgcw();return [l,t,w,h];}}
function stgxy(p){var sr=stgrc(p),ss=0;p.rc=sr.slice(0);if(stissc(p)){var sc=stgobj(p.ids+"SC");sr[p.pver?3:2]=ss=(p.pver?sc.scrollHeight:sc.scrollWidth)+2*p.ipbw+2*p.psds;}if(!p.par){var m=stgme(p),x,y;if(m.mtyp){x=eval(m.mcox+"");y=eval(m.mcoy+"");}else{x=sr[0];y=sr[1];}if(nIEW){x-=p.psds;y-=p.psds;}return stissc(p)?[x,y,stgsc(x,y,p)]:[x,y];}var ir=stgirc(p.par),l=stgcl()-p.psds+stgspc(p,2),t=stgct()-p.psds+stgspc(p,0),r=stgcl()+stgcw()-stgspc(p,3),b=stgct()+stgch()-stgspc(p,1),x=p.poffx+ir[0],y=p.poffy+ir[1];x-=p.pdir==1?sr[2]:p.pdir==2?p.psds-ir[2]:p.psds;y-=p.pdir==3?sr[3]:p.pdir==4?p.psds-ir[3]:p.psds;if(stissc(p)&&!p.pver){var ms=p.pdir==1?(x=Math.max(Math.min(Math.min(r,ir[0]+p.poffx)-sr[2],x),l),Math.min(ir[0]+p.poffx,r)-x):(x=p.pdir==2?Math.max(x,l):Math.max(Math.min(r-sr[2],x),l),r-x);if(nNN6)	ms-=12;ss=ss>ms?ms:0 }else x=Math.max(Math.min(r-sr[2],x),l);if(stissc(p)&&p.pver){var ms=p.pdir==3?(y=Math.max(Math.min(Math.min(b,ir[1]+p.poffy)-sr[3],y),t),Math.min(ir[1]+p.poffy,b)-y):(y=p.pdir==4?Math.max(y,t):Math.max(Math.min(b-sr[3],y),t),b-y);if(nNN6)	ms-=19;ss=ss>ms?ms:0 }else y=Math.max(Math.min(b-sr[3],y),t);return [x,y,ss];}
function stbuf(s){if(s&&stBIMG){var i=new Image();st_ims[st_ims.length]=i;i.src=s;}return s;}
function stabs(s){var t=s.toLowerCase();return t.indexOf(":")==1&&t.charCodeAt()>="a"&&t.charCodeAt()<="z"||!t.indexOf("http:")||!t.indexOf("https:")||!t.indexOf("file:")||!t.indexOf("ftp:")||!t.indexOf("/")||!t.indexOf("javascript:")||!t.indexOf("mailto:")||!t.indexOf("about:")||!t.indexOf("gopher:")||!t.indexOf("news:")||!t.indexOf("telnet:")||!t.indexOf("wais:");}
function stgsrc(s,f){var m=st_ms[st_cm];return s?stabs(s)?s:m.mweb+s:f?m.mbnk:s;}
function showFloatMenuAt(n,x,y){if(nDM){var m=stmenu(n);if(m&&typeof(m.ready)!="undefined"&&m.mtyp==2&&m.ps.length&&!m.ps[0].issh){ststxy(m,[x,y]);stshow(m.ps[0]);}}}
function hideMenu(n){var m=stmenu(n);sthdall(m,1);}
function stmenu(n){for(var j=st_ms.length-1;j>=0;--j)if(st_ms[j].mnam==n)return st_ms[j];return 0;}
function stgirc(i){var m=stgme(i),w=m.sfrm;if(stgpar(i).par||w==window)return stgrc(i);m=w.stmenu(m.mnam);var rc=w.stgrc(m.ps[0].is[i.iti]);if(window.parent==w){var x=rc[0],y=rc[1];}else{var x=rc[0]-w.stgcl(),y=rc[1]-w.stgct();}i.sub.pdir=4-m.mcfd;switch(m.mcfd){case 0:y-=w.stgch();break;case 1:y+=stgch();break;case 2:x-=w.stgcw();break;case 3:x+=stgcw();break;}return [x+stgcl()+m.mcfx,y+stgct()+m.mcfy,rc[2],rc[3]];}
function stisit(ip){return typeof(ip.iti)!="undefined";}
function stgtgt(i){var t=i.itgt;if(t=="_self")return window;else if(t=="_parent")return parent;else if(t=="_top")return top;else for(var co=window;co!=co.parent;co=co.parent)if(typeof(co.parent.frames[t])!="undefined")return co.parent.frames[t];return 0;}
function stgfrm(m){if(!m.mcff)	return window;if(m.mhdd<1000)	m.mhdd=1000;var a=m.mcff.split("."),w="parent";for(var j=0;j<a.length;++j){w+="."+a[j];if(typeof(eval(w))=="undefined")return 0;}return eval("parent."+m.mcff);}
function stgspc(p,d){var m=stgme(p),w=m.sfrm;return p.par&&!p.par.ppi&&w!=window&&stdmld(w)&&w.stmenu(m.mnam).mcfd==d?stCFSP:stSCSP;}
function stsetld(){if(nDM){if(typeof(onload)!="undefined"&&onload!=st_onload&&onload)stusrld[stusrld.length]=onload;onload=st_onload;}}
function stdmld(w){return typeof(w.st_load)!="undefined"&&w.st_load;}
function stissc(p){return st_ascr&&p.ppi&&stgme(p).mscm[p.pver];}
function stm_sc(n,a){if(st_ascr)st_ms[st_cm].mscm[n]={sbgc:[a[0],a[1]],sbgi:[stbuf(stgsrc(a[2],0)),stbuf(stgsrc(a[3],0))],sbgr:[stREP[a[4]],stREP[a[5]]],sbds:stBDS[a[6]],sbdw:a[7],sbdc:[a[8],a[9]],simg:[[stbuf(stgsrc(a[10],0)),stbuf(stgsrc(a[11],0))],[stbuf(stgsrc(a[15],0)),stbuf(stgsrc(a[16],0))]],simw:[a[12],a[17]],simh:[a[13],a[18]],simb:[a[14],a[19]]};}
function stsctx(p,d){with(p)with(stgme(p).mscm[p.pver])return (d?"</table></div></td>"+(pver?"</tr>":""):"")+(pver?"<tr style='display:none'><td":"<td height=100% style='display:none'")+" class=st_tbcss style='padding:"+pspc+"px'><table onmouseover='stscev(st_ms["+mei+"].ps["+ppi+"],"+d+",1)' onmouseout='stscev(st_ms["+mei+"].ps["+ppi+"],"+d+",0)' id="+ids+(d?"SN":"SP")+" height=100% width=100% class=st_tbcss cellpadding=0 cellspacing=0 style='cursor:default;border-style:"+sbds+";border-width:"+sbdw+"px;border-color:"+sbdc[0]+";background-color:"+sbgc[0]+(sbgi[0]?";background-image:url("+sbgi[0]+")":"")+";background-repeat:"+sbgr[0]+";'><td nowrap height=100% class=st_tdcss style='padding:"+ppad+"px;' align=center><img src='"+simg[d][0]+"' align=absmiddle border="+simb[d]+(simw[d]>=0?" width="+simw[d]:"")+(simh[d]>=0?" height="+simh[d]:"")+"></td></table></td>"+(d?(pver?"</tr>":""):(pver?"</tr><tr>":"")+"<td class=st_tbcss><div id="+ids+"SC class=st_divcss style='width:;height:;overflow:hidden;'><table class=st_tbcss cellpadding=0 cellspacing="+pspc+" border=0>");}
function stscev(p,d,v){p.scpx=d?v?4:0:v?-4:0;with(stgme(p).mscm[p.pver]){var o=stgobj(p.ids+(d?"SN":"SP")).style;if(sbdc[0]!=sbdc[1])o.borderColor=sbdc[v];if(sbgc[0]!=sbgc[1])o.backgroundColor=sbgc[v];if(sbgi[0]!=sbgi[1])o.backgroundImage=sbgi[v]?"url("+sbgi[v]+")":"none";o.backgroundRepeat=sbgr[v];}if(!p.scid)p.scid=setTimeout("stscit(st_ms["+p.mei+"].ps["+p.ppi+"]);",10);}
function stscit(p){var d=p.scpx;p.scid=0;with(stgme(p).mscm[p.pver])if(d){var sp=stgobj(p.ids+"SP"),sn=stgobj(p.ids+"SN"),sc=stgobj(p.ids+"SC"),st=p.pver?sc.scrollTop:sc.scrollLeft,mx=p.pver?sc.scrollHeight-sc.offsetHeight:sc.scrollWidth-sc.offsetWidth;if(st==0&&d<0||st==mx&&d>0)return;if(st==(d>0?0:mx))(d>0?sp:sn).rows[0].cells[0].childNodes[0].src=simg[d>0?0:1][1];st+=d;if(d>0?(st>=mx):(st<=0)){(d>0?sn:sp).rows[0].cells[0].childNodes[0].src=simg[d>0?1:0][0];st=d>0?mx:0;}else p.scid=setTimeout("stscit(st_ms["+p.mei+"].ps["+p.ppi+"]);",10);p.pver?(sc.scrollTop=st):(sc.scrollLeft=st);}}
function stgsc(x,y,p){var sc=stgobj(p.ids+"SC"),ms=p.pver?stgct()+stgch()-y-stgspc(p,1):stgcl()+stgcw()-x-stgspc(p,3);return (p.pver?sc.scrollHeight:sc.scrollWidth)+2*p.ipbw>ms?ms:0;}
function stssc(s,p){if(s>=0){if(typeof(p.scid)=="undefined")p.scid=0,p.scsu=0,p.scsd=1;var l=stglay(p),sp=stgobj(p.ids+"SP"),sn=stgobj(p.ids+"SN"),sc=stgobj(p.ids+"SC");(p.pver?sp.parentNode:sp).parentNode.style.display=(p.pver?sn.parentNode:sn).parentNode.style.display=s?'':'none';sc.style.overflow=s?"hidden":"";if(s)s=Math.max(s-(p.pver?sp.offsetHeight+sn.offsetHeight:sp.offsetWidth+sn.offsetWidth)-2*p.ipbw-2*p.psds-4*p.pspc,1);if((p.pver?sc.style.height:sc.style.width)==(s?s+'px':''))	return;p.pver?(sc.style.height=s?s+'px':''):(sc.style.width=s?s+'px':'');with(stgme(p).mscm[p.pver])if(s){sp.rows[0].cells[0].childNodes[0].src=simg[0][(p.pver?sc.scrollTop:sc.scrollLeft)?1:0];sn.rows[0].cells[0].childNodes[0].src=simg[1][(p.pver?sc.scrollTop!=sc.scrollHeight-sc.offsetHeight:sc.scrollLeft!=sc.scrollWidth-sc.offsetWidth)?1:0];}}}
function stwels(c,p){var m=stgme(p);if(!st_load||nNN4||nOP||p.isst)	return;if(m.mhds&&!nIEM)	stwtag("SELECT",c,p);if(m.mhdo&&(nIE4||navigator.appVersion.indexOf("Safari")>=0))	{stwtag("OBJECT",c,p);if(nIE4)stwtag("APPLET",c,p);}if(m.mhdi&&(nIEM||nIEW&&nVER<5.5))	stwtag("IFRAME",c,p);}
function stwtag(tg,c,p){var es=nIE?document.all.tags(tg):document.getElementsByTagName(tg);for(var j=0;j<es.length;++j){var f=0,e=es.item(j);for(var t=e.offsetParent;t;t=t.offsetParent)if(t.id&&t.id.indexOf("Stm")>=0)f=1;if(f)continue;else if(stwover(e,p)){if(e.visLevel)e.visLevel+=c;else e.visLevel=c;if(e.visLevel==-1){if(typeof(e.visSave)=="undefined")e.visSave=e.style.visibility;e.style.visibility="hidden";if(typeof(mywehd)!='undefined'&&mywehd(e))return;}else if(!e.visLevel){if(typeof(mywesh)!='undefined'&&mywesh(e))return;e.style.visibility=e.visSave;}}}}
function stwover(e,p){var l=0,t=0,w=e.offsetWidth,h=e.offsetHeight;w?(e._wd=w):(w=e._wd);h?(e._ht=h):(h=e._ht);while(e)l+=e.offsetLeft,t+=e.offsetTop,e=e.offsetParent;return l<p.rc[2]+p.rc[0]&&l+w>p.rc[0]&&t<p.rc[3]+p.rc[1]&&t+h>p.rc[1];}
function sthili(m,i){with(m)if(i.ityp!=6&&stcurl(i,midn&0x02000000)){if(midn&0x01000000)i.iurl="";do{if(midn&2)i.itxc[0]=i.itxc[1];if(midn&4){i.itxf[0]=i.itxf[1];i.itxd[0]=i.itxd[1];}if(midn&8)i.ibgc[0]=i.ibgc[1];if(midn&16){i.ibgi[0]=i.ibgi[1];i.ibgr[0]=i.ibgr[1];}if(midn&32)i.ibdc[0]=i.ibdc[1];if(midn&64)i.iicn[0]=i.iicn[1];if(midn&128)i.iimg[0]=i.iimg[1];if(midn&256)i.iarr[0]=i.iarr[1];i=stgpar(i).par;}while(i&&(midn&0x04000000));}}
function stcurl(i,c){var t=stgtgt(i);var u=t?t.location.href:"",h=i.iurl;if(!c){u=u.toLowerCase();h=h.toLowerCase();}if(u&&h){if(!h.indexOf("file:////"))h=h.replace(/[\/]{4,}/,"//");else if(h.charAt(0)=="/"){var re=/(file:\/{2,}[^\/]+\/|http:\/\/[^\/]+\/|https:\/\/[^\/]+\/)/;re.exec(u);var s=RegExp.$1,n,r;r=s&&!u.indexOf(s)?s.substr(0,s.length-1):"";h=r?r+h:"";}else if(!stabs(h)){h=u.substr(0,u.lastIndexOf("/")+1)+h;}}var re = new RegExp("/\\./");while(h.indexOf("/./")>0)h=h.replace(re,"/");re = new RegExp("[^/]*/\\.\\./");while(h.indexOf("/../")>0)h=h.replace(re,"");return u&&h&&(u==h||u==h+"/"||stILNK&&u==h.substr(0,Math.max(0,h.indexOf("?")))||stILOC&&h==u.substr(0,Math.max(0,u.indexOf("?"))));}
