import React from 'react'
import { Separator } from "../ui/separator"
import { Avatar } from "../ui/avatar"
import { AvatarImage } from "@radix-ui/react-avatar"

const UserCard = () => {
  return (
    <>
      <Separator />
      <div className="w-full h-fit p-4 flex items-center justify-around">
        <Avatar className="w-8 h-8">
          <AvatarImage src="https://img.freepik.com/free-photo/businessman-using-digital-tablet-while-talking-mobile-phone_107420-64823.jpg?w=1380&t=st=1704831252~exp=1704831852~hmac=e84ac254a5685000a72f7854b2df5741272654e76d0bc6fd8b03b3e9e03385b0"/>
        </Avatar>
      </div>
      <div className="flex flex-col">
        <p className="font-semibold">Jimmy Joe</p>
        <p className="text-xs text-muted-foreground">Executive Sales</p>
      </div>
    </>
  )
}

export default UserCard