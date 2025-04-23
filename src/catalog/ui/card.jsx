
// src/components/ui/card.jsx
export function Card({ children, className, ...props }) {
  return <div className={`p-4 border rounded-lg bg-gray-800 ${className}`} {...props}>{children}</div>;
}

export function CardHeader({ children }) { return <div className="font-bold">{children}</div>; }

export function CardTitle({ children }) { return <h2 className="text-2xl text-white my-2">{children}</h2>; }

export function CardContent({ children }) { return <div className="text-gray-300 text-[25px]">{children}</div>; }

export function CardImage({ src, alt = "course image" }) {
  return <img src={src} alt={alt} className="w-full h-48 object-cover rounded-t-lg" />;
}


