"use client";
import { EmojiProvider, Emoji as AppleEmoji } from "react-apple-emojis";
import emojiData from "react-apple-emojis/src/data.json";

const EmojiComponent = () => {
  return (
    <div>
      <EmojiProvider data={emojiData}>
        <AppleEmoji name="check-mark-button" width={50} />
      </EmojiProvider>
    </div>
  );
};

export default EmojiComponent;
