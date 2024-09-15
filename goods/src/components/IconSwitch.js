function IconSwitch({icon, onSwitch}) {
    return (
        <div className="switch-view" onClick={()=>onSwitch(icon)}>
            <span className="material-icons icon-ui">{icon}</span>
        </div>
    );
}

export default IconSwitch;