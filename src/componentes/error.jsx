function Error({children}){
    return (
       <div className="bg-red-800 text-white uppercase font-bold p-3 mb-4">
           {children}
       </div>
    )
}

export default Error