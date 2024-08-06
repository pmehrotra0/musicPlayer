import { useState } from "react";
import PrimaryLogo from "../assets/PrimaryLogo.png"
import Logo from "../assets/Logo.png";
import Profile from "../assets/Profile.png";

function SideBar() {
    const [open, setOpen] = useState(true);

    return ( <div className="h-[100vh] min-w-fit flex flex-col justify-between p-4 max-sm:flex-row max-sm:h-16 ">
        <div onClick={() => setOpen(prev => !prev)}>
            {open
                ? <img alt="logo" src={Logo} />
                : <img alt="logo" src={PrimaryLogo} className="w-8 h-8" />
            }
        </div>
        <img alt="profile-image" src={Profile} className="w-12 h-12"/>
    </div> );
}

export default SideBar;