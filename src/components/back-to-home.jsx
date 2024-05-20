const BackToHome = ({ className, customURL= "", customText="Zurück zur Homepage", linkClassName= "" }) => {
    return (
        <div className={className + " text-neutral-700 dark:text-neutral-300 text-sm"}>
            <a href={customURL === "" ? "/" : customURL} className={`flex items-center gap-x-2 ${linkClassName}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                     stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"/>
                </svg>
                <span>{customText}</span></a>
        </div>
    );
};

BackToHome.displayName = "BackToHome";
export default BackToHome;