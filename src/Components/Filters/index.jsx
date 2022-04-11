export default function Filters({ extra, children }) {
  return (
    <div
      className="h-14 w-full flex items-center font-body border-t border-b"
      style={{ backgroundColor: "#F8F9FB" }}
    >
      <div className="flex justify-between w-full items-center px-4">
        <div>{children}</div>
        <div>{extra}</div>
      </div>
    </div>
  );
}
