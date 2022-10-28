import { HearingTwoTone, HeartBroken, HeatPumpRounded } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import React from 'react'

const Comments = ({props}) => {
  return (
    <div class="flex justify-around w-[30rem] absolute left-0">
        <Avatar />
        <div class="flex flex-col">
            <div class="flex justify-around gap-2 relative right-5">
                <u>kn8wn</u>
                <span>The cut was indeed crazy.</span>
            </div>
            <div class="flex text-slate-300 justify-around relative right-9">
                <pre class="opacity-0.5">21h</pre>
                <pre>1 like</pre>
                <pre>Reply</pre>
            </div>
        </div>
        <IconButton>
            <HeartBroken />
        </IconButton>
    </div>
  )
}

export default Comments