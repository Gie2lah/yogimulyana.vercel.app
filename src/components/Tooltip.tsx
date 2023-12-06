// import clsx from "clsx";
// import { Tooltip, TooltipProps } from "react-tippy";

// type TooltipTextProps = {
//   tipChildren?: React.ReactNode;
//   children?: React.ReactNode;
//   className?: string;
//   spanClassName?: string;
//   withUnderline?: boolean;
// } & TooltipProps &
//   Omit<React.ComponentPropsWithoutRef<"div">, "children" | "className">;

// export default function TippyTooltip({
//   tipChildren,
//   children,
//   className,
//   spanClassName,
//   withUnderline = false,
//   ...rest
// }: TooltipTextProps) {
//   return (
//     <Tooltip
//       trigger="mouseenter"
//       interactive
//       html={
//         <div
//           className={clsx(
//             className,
//             "inline-block rounded-md bg-white p-2 text-gray-600 shadow-md dark:bg-dark dark:text-gray-200",
//             "border dark:border-gray-600"
//           )}
//         >
//           {tipChildren}
//         </div>
//       }
//       {...rest}
//     >
//       {withUnderline ? (
//         <span
//           className={clsx(spanClassName, "underline")}
//           style={{ textDecorationStyle: "dotted" }}
//         >
//           {children}
//         </span>
//       ) : (
//         <>{children}</>
//       )}
//     </Tooltip>
//   );
// }
