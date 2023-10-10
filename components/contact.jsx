"use client"

import SectionHeading from "./section-heading"
import contactStyle from "@/styles/contact.module.css"
import { FaPaperPlane } from "react-icons/fa"
import { motion } from "framer-motion"
import { useSectionInView } from "@/lib/hooks"

export default function Contact() {
    const { ref } = useSectionInView("Contact", 1)

    return (
        <motion.section
            className={contactStyle.section}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            ref={ref}
            id="contact"
        >
            <SectionHeading>Contact Me</SectionHeading>
            <p className={contactStyle.info}>
                Please contact me directly at{" "}
                <a className={contactStyle.mail} href="mailto:wargacki.patryq@gmail.com">
                    wargacki.patryq@gmail.com
                </a>{" "}
                or through this form.
            </p>

            <form className={contactStyle.form}>
                <input className={contactStyle.input} type="email" placeholder="Your email" />
                <textarea className={contactStyle.textarea} placeholder="Your message" />
                <button className={`${contactStyle.submitButton} ${contactStyle.sbutton}`} type="submit">
                    Submit <FaPaperPlane className={contactStyle.icon} />{" "}
                </button>
            </form>
        </motion.section>
    )
}
