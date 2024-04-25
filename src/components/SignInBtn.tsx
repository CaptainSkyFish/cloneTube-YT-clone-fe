export const SignInBtn = () => {
    return (<div className="pt-2.5 ">
    <button className="flex border hover:border-blue-500 border-gray-600" 
    style={{borderRadius: "20px",
                    paddingLeft: "12px",
                    paddingRight: "12px",
                    padding: "8px",
                    color: "#3ea6ff",
                    background: "linear-gradient(225deg, #151515, #121212)",
                    boxShadow:  "-16px 16px 23px #0e0e0e, 16px -16px 23px #1a1a1a",}}>
    
    <svg xmlns="http://www.w3.org/2000/svg" 
        id="Outline" 
        stroke="gray"
        strokeWidth={1.5}
        viewBox="0 0 24 24" 
        width="23" 
        height="23">
        <path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z"/>
        <path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z"/>
    </svg>
    <span className="px-1">Sign In</span>
    </button>
    </div>);
}
