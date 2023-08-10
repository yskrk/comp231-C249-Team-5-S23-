import React from "react"
import Head from "next/head"
import NextNProgress from "../components/NextNProgress"

import Header from "./Header"
import Footer from "./Footer"
import Icons from "./Icons"

import { FormProvider } from "./FormContext"
import { CartProvider } from "./CartContext"
import { WishlistProvider } from "./WishlistContext"
import SSRProvider from "react-bootstrap/SSRProvider"

const Layout = (pageProps) => {
	return (
		<SSRProvider>
			<Head>
				<link rel="icon" href="/favicon.png" />
				<title>{`${pageProps.title} - Directory React Theme`}</title>
			</Head>
			<NextNProgress color="#bcac76" options={{ showSpinner: false }} />

			<CartProvider>
				<WishlistProvider>
					<Header header={pageProps.header} />
					{pageProps.checkout ? (
						<FormProvider>
							<main>{pageProps.children}</main>
						</FormProvider>
					) : (
						<main>{pageProps.children}</main>
					)}
					<Footer />
				</WishlistProvider>
			</CartProvider>
			<Icons />
		</SSRProvider>
	)
}

export default Layout
