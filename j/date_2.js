
<!-- Begin
/*
 * Notes on hue
 *
 * This script uses hue rotation in the following manner:
 * hue=0   is red (#FF0000)
 * hue=60  is yellow (#FFFF00)
 * hue=120 is green (#00FF00)
 * hue=180 is cyan (#00FFFF)
 * hue=240 is blue (#0000FF)
 * hue=300 is magenta (#FF00FF)
 * hue=360 is hue=0 (#FF0000)
 *
 * Notes on the script
 *
 * This script should function in any browser that supports document.getElementById
 * It has been tested in Netscape7, Mozilla Firefox 1.0, and Internet Explorer 6
 *
 * Accessibility
 *
 * The script does not write the string out, but rather takes it from an existing
 * HTML element. Therefore, users with javascript disabled will not be adverely affected.
 * They just won't get the pretty colors.
 */

/*
 * splits par.firstChild.data into 1 span for each letter
 * ARGUMENTS
 *   span - HTML element containing a text node as the only element
 */
function toSpans(span) {
  var str=span.firstChild.data;
  var a=str.length;
  span.removeChild(span.firstChild);
  for(var i=0; i<a; i++) {
    var theSpan=document.createElement("SPAN");
    theSpan.appendChild(document.createTextNode(str.charAt(i)));
    span.appendChild(theSpan);
  }
}
function RainbowSpan(span, hue, deg, brt, spd, hspd) {
    this.deg=(deg==null?360:Math.abs(deg));
    this.hue=(hue==null?0:Math.abs(hue)%360);
    this.hspd=(hspd==null?3:Math.abs(hspd)%360);
    this.length=span.firstChild.data.length;
    this.span=span;
    this.speed=(spd==null?50:Math.abs(spd));
    this.hInc=this.deg/this.length;
    this.brt=(brt==null?255:Math.abs(brt)%256);
    this.timer=null;
    toSpans(span);
    this.moveRainbow();
}
RainbowSpan.prototype.moveRainbow = function() {
  if(this.hue>359) this.hue-=360;
  var color;
  var b=this.brt;
  var a=this.length;
  var h=this.hue;

  for(var i=0; i<a; i++) {

    if(h>359) h-=360;

    if(h<60) { color=Math.floor(((h)/60)*b); red=b;grn=color;blu=0; }
    else if(h<120) { color=Math.floor(((h-60)/60)*b); red=b-color;grn=b;blu=0; }
    else if(h<180) { color=Math.floor(((h-120)/60)*b); red=0;grn=b;blu=color; }
    else if(h<240) { color=Math.floor(((h-180)/60)*b); red=0;grn=b-color;blu=b; }
    else if(h<300) { color=Math.floor(((h-240)/60)*b); red=color;grn=0;blu=b; }
    else { color=Math.floor(((h-300)/60)*b); red=b;grn=0;blu=b-color; }

    h+=this.hInc;

    this.span.childNodes[i].style.color="rgb("+red+", "+grn+", "+blu+")";
  }
  this.hue+=this.hspd;
}
//-->
var GMT = +1;
var waktu = new Date();
waktu.setUTCMinutes(waktu.getUTCMinutes() + (GMT+0)*60);
var tahun=waktu.getUTCFullYear();
var hari=waktu.getUTCDay();
var bulan=waktu.getUTCMonth();
var tanggal=waktu.getUTCDate();
if (tanggal < 10) {tanggal="0"+tanggal} 
var hariarray=new Array("<font color='#ff00ff'>S</font><font color='#ff00cc'>u</font><font color='#ff0099'>n</font><font color='#ff0066'>d</font><font color='#ff0033'>a</font><font color='#ff0000'>y</font>","<font color='#ff00ff'>M</font><font color='#ff00cc'>o</font><font color='#ff0099'>n</font><font color='#ff0066'>d</font><font color='#ff0033'>ay</font>","<font color='#ff00ff'>Tu</font><font color='#ff00cc'>e</font><font color='#ff0099'>s</font><font color='#ff0066'>d</font><font color='#ff0033'>a</font><font color='#ff0000'>y</font>","<font color='#ff00ff'>We</font><font color='#ff00cc'>dn</font><font color='#ff0099'>es</font><font color='#ff0066'>day</font>","<font color='#ff00ff'>Th</font><font color='#ff00cc'>ur</font><font color='#ff0099'>s</font><font color='#ff0066'>da</font><font color='#ff0033'>y</font>","<font color='#ff00ff'>F</font><font color='#ff00cc'>r</font><font color='#ff0099'>i</font><font color='#ff0066'>d</font><font color='#ff0033'>a</font><font color='#ff0000'>y</font>","<font color='#ff00ff'>Sa</font><font color='#ff00cc'>tu</font><font color='#ff0099'>rd</font><font color='#ff0066'>a</font><font color='#ff0033'>y</font>")
var bulanarray=new Array("01","02","03","04","05","06","07","08","09","10","11","12")
document.write("<h id=r508>"+tanggal+" / "+bulanarray[bulan]+" / "+tahun+("</h>"))
var r508=document.getElementById("r508"); //get span to apply rainbow
var myRainbowSpan=new RainbowSpan(r508, 0, 360, 255, 50, 18);
myRainbowSpan.timer=window.setInterval("myRainbowSpan.moveRainbow()", myRainbowSpan.speed);
