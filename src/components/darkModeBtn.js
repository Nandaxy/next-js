"use client"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"

const DarkModeBtn = () => {
	const [mounted, setMounted] = useState(false)
	const { systemTheme, theme, setTheme } = useTheme()

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return null
	}


	const currentTheme = theme === "system" ? systemTheme : theme

	return (
		<div>
			{currentTheme === "dark" ? (
				<SunIcon
					className="h-6 w-6 cursor-pointer text-yellow-400"
					onClick={() => {
						setTheme("light")
					}}
				/>
			) : (
				<MoonIcon
					className="h-6 w-6 cursor-pointer text-slate-700"
					onClick={() => {
						setTheme("dark")
					}}
				/>
			)}
		</div>
	)
}
export default DarkModeBtn
