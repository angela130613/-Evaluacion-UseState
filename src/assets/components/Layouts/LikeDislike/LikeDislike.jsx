import { useState } from 'react'

export const LikeDislike = () => {
    // Like/Dislike States
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  // Like/Dislike Handlers
  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };


    return (
        <div>
          <h2 className="text-xl font-semibold mb-4">Like/Dislike Counters</h2>
          <div className="flex justify-between">
            <button onClick={handleLike} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              👍 Like ({likes})
            </button>
            <button onClick={handleDislike} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
              👎 Dislike ({dislikes})
            </button>
          </div>
        </div>
    )
}