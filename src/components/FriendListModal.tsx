import React, { useState, FormEvent, useEffect, useRef } from "react";

type Props = {};

const FriendListModal = (props: Props) => {
  const [open, setOpen] = useState(false);
  const friendListRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    setOpen(false);
  };

  return <div>FriendListModal</div>;
};

export default FriendListModal;
