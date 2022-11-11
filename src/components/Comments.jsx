import { useState, useEffect } from 'react'

export default function CommentCard({avatar,name, time, content}) {

  return (
    <>
      <div className='flex p-3'>
        <div className="flex-shrink-0 mr-3">
          <img className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10" src={avatar} alt={`avatar_${name}`} />
        </div>
        <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
          <strong>{name}</strong> <span className="text-xs text-gray-400">{time}</span>
          <p className="text-sm">
            {content}
          </p>
        </div>
      </div>
    </>
  )
}