/**
 * Banner Component
 * Generate a banner with a background taking the url in scss and children
 * @param {React.ReactNode} props.children
 */
export default function Banner({ children }) {
  return <div className="banner">{children}</div>
}
