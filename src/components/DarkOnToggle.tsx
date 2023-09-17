type DarkOnToggleProps = {
  handleCloseNav: () => void;
};

function DarkOnToggle({ handleCloseNav }: DarkOnToggleProps) {
  return (
    <div
      style={{
        top: 0,
        right: 0,
        zIndex: 5,
        width: "100%",
        display: "block",
        height: "100%",
        position: "absolute",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
      onClick={handleCloseNav}
    ></div>
  );
}

export default DarkOnToggle;
