import { useEffect } from "react";
const CustomScript = ({children}) => {
    useEffect(() => {
        document.querySelector(".copyright span").innerHTML = new Date().getFullYear();

        var number = "+1-000-000-0000";
        var mail = "info@demo.com";
        var address = "86-Lorem ipdum dolor, AMT";
        var fb = "https://www.facebook.com";
        var tw = "https://www.twitter.com";
        var lin = "https://www.linkedin.com";
        var ins = "https://www.instagram.com";
        var skype = "https://www.skype.com";
        var wapp = "https://whatsapp.com";

        document.querySelectorAll(".number").forEach(function(e){
            e.setAttribute("target", "_blank");
            e.setAttribute("href", `tel:${number}`);
            if(document.contains(e.querySelector(".txt"))){
                e.querySelector(".txt").innerHTML = number;
            }
        });
        document.querySelectorAll(".mail").forEach(function(e){
            e.setAttribute("target", "_blank");
            e.setAttribute("href", `mailto:${mail}`);
            if(document.contains(e.querySelector(".txt"))){
                e.querySelector(".txt").innerHTML = mail;
            }
        });
        document.querySelectorAll(".address").forEach(function(e){
            e.querySelector(".txt").innerHTML = address;
        });
        document.querySelectorAll(".fb").forEach(function(e){
            e.setAttribute("target", `_blank`);
            e.setAttribute("href", fb);
        });
        document.querySelectorAll(".tw").forEach(function(e){
            e.setAttribute("target", `_blank`);
            e.setAttribute("href", tw);
        });
        document.querySelectorAll(".lin").forEach(function(e){
            e.setAttribute("target", `_blank`);
            e.setAttribute("href", lin);
        });
        document.querySelectorAll(".ins").forEach(function(e){
            e.setAttribute("target", `_blank`);
            e.setAttribute("href", ins);
        });
        document.querySelectorAll(".skype").forEach(function(e){
            e.setAttribute("target", `_blank`);
            e.setAttribute("href", skype);
        });
        document.querySelectorAll(".wapp").forEach(function(e){
            e.setAttribute("target", `_blank`);
            e.setAttribute("href", wapp);
        });
        document.querySelectorAll("main .fw").forEach(function (e) {
            e.parentElement.classList.add("fwParent");
        });
        document.querySelectorAll(".container .row [class*=col-] [class*=col-]").forEach(function (e) {
            e.parentElement.closest("[class*=col-]").style.marginBottom = 0;
        });
        document.querySelectorAll(".colors").forEach(function(a){
            var listItems = a.querySelectorAll("data");
            const classsData = [
                {color : "var(--b1)"},
                {color : "var(--b2)"},
                {color : "var(--b3)"},
                {color : "var(--b4)"},
                {color : "var(--b5)"},
                {color : "var(--b6)"},
                {color : "var(--b7)"},
                {color : "var(--b8)"},
                {color : "var(--b9)"},
                {color : "var(--b10)"}
            ];
            var i = 0;
            for (let li of listItems) {
              if (i == classsData.length){
                i = 0;
              }
              li.style.setProperty("--bk1", classsData[i].color);
              i++;
            }
        });
      }, []);
      return children;
}
export default CustomScript;