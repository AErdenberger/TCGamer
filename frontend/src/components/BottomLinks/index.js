import { Link } from "react-router-dom/cjs/react-router-dom";
import "./index.css"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function BottomLinks() {

    const history = useHistory();

    return (
        <div className="BottomBar">
            <div>
                <p>This clone is for educational purposes only.</p>
                <p>Please do not put any sensitive information.</p>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/alex-erdenberger-36274b88/" target="blank">
                    <img src="/LinkedIn_logo_initials.png" id="linkedin" />
                </a>
                <a href="https://github.com/AErdenberger" target="blank">
                    <img src="/GitHub-Mark.png" id="github" />
                </a>
            </div>
        </div>
    )
}

export default BottomLinks;