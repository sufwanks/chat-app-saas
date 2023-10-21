"use client";

import { MessageSquarePlusIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

function CreateChatButton() {
  const router = useRouter();

  //create a new chat
  const createNewChat = async () => {
    router.push(`/chat/abc`);
  };

  return (
    <Button className="" variant={"ghost"} onClick={createNewChat}>
      <MessageSquarePlusIcon />
    </Button>
  );
}

export default CreateChatButton;
