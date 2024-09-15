function Toolbar({filters,selected,onSelectFilter}) {
    return (
        <div className="toolbar">
            {
                filters.map((name,idx) => {
                    let classNameButton;
                    if (name === selected) {
                        classNameButton = 'btn btn-active btn-neutral ui-btn';
                    }
                    else
                    {
                        classNameButton = 'btn btn-outline ui-btn';
                    }

                    return (<button key={"filter-"+idx}
                                    className={classNameButton}
                                    onClick={(event)=>onSelectFilter(name)}>
                            {name}
                    </button>)
                })
            }
        </div>
    );
}

export default Toolbar;