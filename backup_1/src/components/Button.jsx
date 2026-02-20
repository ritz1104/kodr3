const Button = ({like,dislike}) => {
  return (
    <div className="flex gap-2">
            <button onClick={like} className="w-20 h-10 bg-blue-400 rounded-2xl">
              Like
            </button>

            <button onClick={dislike} className="w-20 h-10 bg-red-400 rounded-2xl">
              Dislike
            </button>
          </div>
  )
}

export default Button