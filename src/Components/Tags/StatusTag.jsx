// import { useTranslation } from "react-i18next"

export default function StatusTag({ status, innerText, color, className, style, disableBorderRadius }) {
  // const { t } = useTranslation()

  return (
    <div
      style={{ backgroundColor: color + "30", color: color ?? "#fff", whiteSpace: "nowrap", ...style }}
      className={`
        bg-${status ? "primary" : "error"}-600 
        py-1 px-2.5 
        text-sm w-full 
        ${disableBorderRadius ? "" : "rounded-md"} text-center 
        ${className}`}
    >
      {innerText ? innerText : status ? "active" : "inactive"}
    </div>
  )
}
