import React from "react";

export default function MenuPane({dispatch}) {
	return (
		<div
			className="fixed w-full bg-transparent h-screen top-0 right-0 z-[100] flex justify-end"
			onClick={() => dispatch({ type: "closeNav" })}
		>
			<div
				className="flex w-1/3 bg-red-500"
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				test
			</div>
		</div>
	);
}
