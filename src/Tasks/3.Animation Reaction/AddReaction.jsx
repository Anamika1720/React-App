import { useState } from "react";
import EmojiPicker from "emoji-picker-react";

const AddReaction = () => {
  const [emoji, setEmoji] = useState("");
  const [pickerVisible, setPickerVisible] = useState(false);

  const handleEmojiClick = (e) => {
    setEmoji(e.emoji);
    setPickerVisible(false);
  };

  return (
    <>
      <button onClick={() => setPickerVisible(!pickerVisible)}>
        {emoji ? emoji : '+'}
      </button>

      {pickerVisible && (
        <div>
          <EmojiPicker onEmojiClick={handleEmojiClick} />
        </div>
      )}
    </>
  );
};

export default AddReaction;
