"use client"
import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Heading, Subheading } from "@/components/ui/text"
import Link from "next/link"

const FaqSection = React.forwardRef(
  ({ className, title, description, items, contactInfo, contactPath, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "py-12 w-full max-w-full overflow-hidden bg-gradient-to-b from-transparent via-muted/50 to-transparent",
          className,
        )}
        {...props}
      >
        <div className="w-full max-w-full px-6 sm:px-8 mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-full text-center mb-8 sm:mb-12"
          >
            <Heading className="text-xl sm:text-2xl lg:text-6xl px-2">{title}</Heading>

            {description && (
              <Subheading className="text-sm sm:text-base text-muted-foreground mt-4 px-4">{description}</Subheading>
            )}
          </motion.div>

          {/* FAQ Items */}
          <div className="w-full max-w-full sm:max-w-2xl mx-auto space-y-2">
            {items.map((item, index) => (
              <FaqItem key={index} question={item.question} answer={item.answer} index={index} />
            ))}
          </div>

          {/* Contact Section */}
          {contactInfo && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-full max-w-full sm:max-w-md mx-auto mt-8 sm:mt-12 p-4 sm:p-6 rounded-lg text-center"
            >
              <div className="inline-flex items-center justify-center p-1.5 rounded-full mb-4">
                <Mail className="h-4 w-4" />
              </div>
              <p className="text-sm font-medium text-foreground mb-1">{contactInfo.title}</p>
              <p className="text-xs text-muted-foreground mb-4 px-2">{contactInfo.description}</p>
              <Link href={contactInfo.contactPath}>
                <Button size="sm" onClick={contactInfo.onContact} className="bg-gradient-to-tr from-cyan-400 to-blue-500 text-white">
                  {contactInfo.buttonText}
                </Button>
              </Link>
            </motion.div>
          )}
        </div>
      </section>
    )
  },
)
FaqSection.displayName = "FaqSection"

// Internal FaqItem component
const FaqItem = React.forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const { question, answer, index } = props

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.1 }}
      className={cn(
        "group rounded-lg w-full max-w-full",
        "transition-all duration-200 ease-in-out",
        "border border-border/50",
        isOpen ? "bg-gradient-to-br from-background via-muted/50 to-background" : "hover:bg-muted/50",
      )}
    >
      <Button
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full max-w-full px-3 sm:px-6 py-3 sm:py-4 h-auto justify-between hover:bg-transparent text-left flex items-start gap-2"
      >
        <h3
          className={cn(
            "text-sm sm:text-base lg:text-lg font-medium transition-colors duration-200 text-left",
            "text-foreground/70 break-words hyphens-auto word-break-break-word",
            "leading-relaxed flex-1 min-w-0 whitespace-normal",
            isOpen && "text-foreground",
          )}
          style={{
            wordWrap: "break-word",
            overflowWrap: "break-word",
            wordBreak: "break-word",
          }}
        >
          {question}
        </h3>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            scale: isOpen ? 1.1 : 1,
          }}
          transition={{ duration: 0.2 }}
          className={cn(
            "p-0.5 rounded-full flex-shrink-0 mt-0.5",
            "transition-colors duration-200",
            isOpen ? "text-primary" : "text-muted-foreground",
          )}
        >
          <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4" />
        </motion.div>
      </Button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: { duration: 0.2, ease: "easeIn" },
            }}
            className="w-full max-w-full"
          >
            <div className="px-3 sm:px-6 pb-3 sm:pb-4 pt-2 w-full max-w-full">
              <motion.p
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                className="text-sm text-muted-foreground leading-relaxed break-words word-break-break-word max-w-full whitespace-normal"
                style={{
                  wordWrap: "break-word",
                  overflowWrap: "break-word",
                  wordBreak: "break-word",
                }}
              >
                {answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
})
FaqItem.displayName = "FaqItem"

export { FaqSection }
