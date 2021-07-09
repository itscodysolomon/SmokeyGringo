import * as React from "react";
import { useState } from "react";
import gringoIcon from "../assets/images/gringo-icon-lg-orange.svg";

// markup
const Mexicue = () => {

    let [showMexPopup, setMexPopup] = useState(true);
    
    if(typeof window !== 'undefined') {

    const setMexCookie = (cname, cvalue, exdays) => {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    const getCookie = (cname) => {
        var name = cname + "=";
        var ca = document.cookie.split(";");
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === " ") {
            c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    const shouldShowMexPopup = () => {
        let mex = getCookie("mexicue");
        if (!mex === true) {
            return true
        } else {
            return false
        }
    }

    const hidePopup = () => {
        document.body.classList.add("fade-out");
        setTimeout(function() {
            setMexPopup(false);
            setMexCookie("mexicue", true, 30)
            document.body.classList.remove("modal-open");
            document.body.classList.remove("fade-out");
        },250);
    }

    if(shouldShowMexPopup()) {
        document.body.classList.add("modal-open");
        return (
            <div id="mexicue" className="popup">
                {showMexPopup && 
                <div className="content">
                    <img alt="Icon: Smokey Gringo Mask" src={gringoIcon} />
                    <h1>Mexicue</h1>
                    <p>(noun) Mex•Eh•Cue</p>
                    <p>A delicious matrimony between Mexican and Barbecue cuisines.<br/>Bold, fresh, electric ingredients that intentionally invite you in.</p>
                    <p><i><strong>AJ</strong>: "Mexicue... just like TexMex??"</i></p>
                    <p><i><strong>Smokey Gringo</strong>: "No AJ, not like TexMex... better than TexMex, like <strong>Mexicue</strong>."</i></p>
                    <p><a onClick={hidePopup} target="_blank" rel="noreferrer" className="btn btn--orange">Enter</a></p>
                </div>
                }
            </div>
        )
    } else {
        return null
    }
    } else {
        return null
    }

  }
  
export default Mexicue