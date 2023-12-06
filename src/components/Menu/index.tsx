"use client"

import Link from 'next/link'
import estilos from './Menu.module.scss'
import { useState } from 'react';

export default function Menu({ children }) {

    const links = [
        { id: 1, url: './principal', titulo: "Home" },

    ]

    return (
        <>
            <header className={estilos.menu}>
                <nav className={estilos.menu_navegacao}>
                    <article className={estilos.menu_logo}>
                        <Link href='./principal' className={estilos.menu_logo_texto}>Portas</Link>
                    </article>
                    <ul className={estilos.menu_lista}>
                        {links.map((link) => <Link className={estilos.menu_lista_link} href={link.url} key={link.id}> {link.titulo} </Link>)}
                    </ul>
                </nav>
            </header>
            {children}
        </>

    )
}