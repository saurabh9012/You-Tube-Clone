/*Sidebar ki leye function bna rhe hai or selector method ka use kr rhe hai.*/
var menuIcon = document.querySelector(".menu-icon") /*Humne esme kya kiya hai ek menuIcon name ka vairable bnaya fr uske under 
                                            querySelector lgaya Ab eske under hum class name dege menuicon ka or uska name 
                                            hai.*/
var sidebar = document.querySelector(".sidebar")/*same aise hi humne side baar ki saath kiya hai jaise menuicon ki saath 
                                                kra.*/
var container = document.querySelector(".container")/*Humne container name ka ek variable bnaya or fr querysecltor ka use
                                                kra or fr uske under conatier ki class de container hi name hai class 
                                                ka*/
// Ab neche dekhe kaise hum menuIcon pr onclick ka use krege.
menuIcon.onclick=function(){ /*Humne jo uper variable bnaya hai menuIcon name se uske under onclick method use kr ki ek 
                                function lekh rhe hai. Hum es function mein ek code lekhege neche dekhege*/
    sidebar.classList.toggle("small-sidebar") /*Humne ye sidebar jo hai wo leya hai jo uper variable bnaya hai or ye bola 
                                                hai es line mein ki jo bhi person menuIcon pr click kre to ye kro or hum 
                                                ek class name use kre hai jiska name hai small-sidebar kuch bhi le sekte 
                                                hai.*/
    container.classList.toggle("large-container") /*Humne ye container jo hai wo leya hai jo uper variable bnaya hai or ye
                                                    bola hai es line mein ki jo bho person menuIcon pr click kre or fr
                                                    jb humara sidebar gayeb hojaye to ye kro jo hum es large-container
                                                    name ki class mein de rhe hai or wo deya hai humne style.css ki 
                                                    under.jaakr dekhe to fr ye function vhe krega.*/

}
/*Ab hum kya krege ki jo humara sidebar hai jb usko click kr ki gayeb kr dete hai to uske side mein bahut space
rhta hai to uske leye kya krege hum container ki width jada krege jb wo sidebar chle jaaya kre to. To uske leye
kya krege hum ek or querySelector ka use kr ki ye function bnayege.uper dekhe kaise bnaya hai 3rd vaale line uper se*/
