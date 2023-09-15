type DarkOnToggleProps = {
  handleCloseNav: () => void;
};

function DarkOnToggle({ handleCloseNav }: DarkOnToggleProps) {
  return (
    <div
      style={{
        top: 0,
        right: 0,
        zIndex: 1,
        width: "100%",
        display: "block",
        maxWidth: "100%",
        minHeight: "100vh",
        position: "absolute",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
      onClick={handleCloseNav}
    ></div>
  );
}

export default DarkOnToggle;
