import React from 'react'
import { motion } from 'framer-motion'
import {
  Mail, Phone, MapPin, ChevronUp, Facebook, Instagram, Twitter, Github
} from 'lucide-react'
import './FooterGhostcat.css'

export default function FooterGhostcat({
  brand = {
    name: 'Ghostcat',
    tagline: 'Arte sombria. Alma vibrante.',
  },
  links = {
    company: [
      { label: 'Sobre', href: '/sobre' },
      { label: 'Equipe', href: '/equipe' },
      { label: 'Carreiras', href: '/carreiras' },
    ],
    products: [
      { label: 'Coleções', href: '/colecoes' },
      { label: 'Galeria', href: '/galeria' },
      { label: 'Comissões', href: '/comissoes' },
    ],
    support: [
      { label: 'Contato', href: '/contato' },
      { label: 'Ajuda', href: '/ajuda' },
      { label: 'Política de Privacidade', href: '/privacidade' },
    ],
  },
  socials = [
    { icon: 'Instagram', href: 'https://instagram.com' },
    { icon: 'Twitter', href: 'https://twitter.com' },
    { icon: 'Facebook', href: 'https://facebook.com' },
    { icon: 'Github', href: 'https://github.com' },
  ],
}) {

  const fadeInUp = {
    hidden: { opacity: 0, y: 8 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.06 }
    }),
  }

  const SocialIcon = ({ name }) => {
    switch (name) {
      case 'Instagram': return <Instagram />
      case 'Twitter': return <Twitter />
      case 'Facebook': return <Facebook />
      case 'Github': return <Github />
      default: return <Github />
    }
  }

  return (
    <footer className="ghost-footer">

      <div className="ghost-container">

        <div className="ghost-grid">

       
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={0} className="ghost-brand">
            <div className="ghost-logo">
              
              <div>
                <h3>{brand.name}</h3>
                <p>{brand.tagline}</p>
              </div>
            </div>

            <p className="ghost-desc">
              Ghostcat é um estúdio que mistura arte sombria e experimentação visual.
            </p>

            <div className="ghost-info">
              <span><MapPin size={16} /> São Paulo, BR</span>
              <span><Phone size={16} /> +55 (11) 99999-9999</span>
            </div>
          </motion.div>

          <div className="ghost-links">

            {Object.entries(links).map(([title, items], i) => (
              <motion.div key={title} variants={fadeInUp} initial="hidden" animate="visible" custom={i + 1}>
                <h4>{title}</h4>
                <ul>
                  {items.map(l => (
                    <li key={l.label}><a href={l.href}>{l.label}</a></li>
                  ))}
                </ul>
              </motion.div>
            ))}

            <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={4}>
              <h4>Conecte-se</h4>
              <div className="ghost-socials">
                {socials.map(s => (
                  <motion.a
                    whileHover={{ y: -4 }}
                    key={s.href}
                    href={s.href}
                    target="_blank"
                  >
                    <SocialIcon name={s.icon} />
                  </motion.a>
                ))}
              </div>

              <div className="ghost-contact">
                <a href="mailto:contato@ghostcat.art"><Mail size={16} /> contato@ghostcat.art</a>
                <a href="/contato"><Phone size={16} /> Formulário de contato</a>
              </div>
            </motion.div>

          </div>

   
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={5} className="ghost-cards">
            <div>
              <p>Horário</p>
              <strong>Seg — Sex: 10h — 18h</strong>
            </div>

            <div>
              <p>Comissões</p>
              <strong>7 — 14 dias</strong>
            </div>
          </motion.div>

        </div>

 
        <div className="ghost-bottom">
          <p>© {new Date().getFullYear()} {brand.name}</p>

          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <ChevronUp size={18} /> Topo
          </button>
        </div>

      </div>

      <svg className="ghost-wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0 C300,100 900,0 1200,80 L1200,120 L0,120 Z" fill="#06020a" />
      </svg>

    </footer>
  )
}
