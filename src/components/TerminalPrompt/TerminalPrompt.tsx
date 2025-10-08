'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

interface TerminalPromptProps {
  onComplete: () => void
}

interface Command {
  prompt: string
  command: string
  output: string[]
  delay?: number
}

interface ExecutedCommand {
  prompt: string
  command: string
  output: string[]
  isTyping?: boolean
  currentTypedCommand?: string
  currentOutput?: string[]
}

export default function TerminalPrompt({ onComplete }: TerminalPromptProps) {
  const [executedCommands, setExecutedCommands] = useState<ExecutedCommand[]>([])
  const [showCursor, setShowCursor] = useState(true)
  const [isComplete, setIsComplete] = useState(false)
  const onCompleteRef = useRef(onComplete)
  
  onCompleteRef.current = onComplete

  const commands: Command[] = [
    {
      prompt: "nicolas@dev:~$",
      command: "whoami",
      output: ["Nicolas FARACI", "Développeur Full-Stack"],
      delay: 150
    },
    {
      prompt: "nicolas@dev:~$",
      command: "cat skills.json",
      output: [
        "{",
        '  "frontend": ["Next.js", "React"],',
        '  "backend": ["Spring Boot", "Symfony"],',
        '  "database": ["MongoDB", "PostgreSQL"],',
        '  "cloud": ["Kubernetes", "GCP"]',
        "}"
      ],
      delay: 80
    },
    {
      prompt: "nicolas@dev:~$",
      command: "git status",
      output: [
        "Prêt pour de nouveaux projets ! 🚀"
      ],
      delay: 120
    }
  ]

  // Effet pour le curseur clignotant
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 600)

    return () => clearInterval(cursorInterval)
  }, [])

  useEffect(() => {
    let isMounted = true
    
    const executeCommands = async () => {
      await new Promise(resolve => setTimeout(resolve, 300))

      for (let cmdIndex = 0; cmdIndex < commands.length; cmdIndex++) {
        if (!isMounted) return
        
        const cmd = commands[cmdIndex]
        
        // Ajouter la commande en cours de frappe
        setExecutedCommands(prev => [...prev, {
          prompt: cmd.prompt,
          command: cmd.command,
          output: cmd.output,
          isTyping: true,
          currentTypedCommand: '',
          currentOutput: []
        }])
        
        // Taper la commande caractère par caractère
        for (let i = 0; i <= cmd.command.length; i++) {
          setExecutedCommands(prev => {
            const newCommands = [...prev]
            const lastCmd = newCommands[newCommands.length - 1]
            lastCmd.currentTypedCommand = cmd.command.slice(0, i)
            return newCommands
          })
          await new Promise(resolve => setTimeout(resolve, 30))
        }

        // Pause avant l'output
        await new Promise(resolve => setTimeout(resolve, 100))
        
        // Marquer la frappe comme terminée
        setExecutedCommands(prev => {
          const newCommands = [...prev]
          const lastCmd = newCommands[newCommands.length - 1]
          lastCmd.isTyping = false
          return newCommands
        })

        // Afficher l'output ligne par ligne
        for (let i = 0; i < cmd.output.length; i++) {
          setExecutedCommands(prev => {
            const newCommands = [...prev]
            const lastCmd = newCommands[newCommands.length - 1]
            lastCmd.currentOutput = cmd.output.slice(0, i + 1)
            return newCommands
          })
          await new Promise(resolve => setTimeout(resolve, cmd.delay || 150))
        }

        // Pause avant la commande suivante
        if (cmdIndex < commands.length - 1) {
          await new Promise(resolve => setTimeout(resolve, 200))
        }
      }

      // Animation terminée
      if (isMounted) {
        setTimeout(() => {
          setIsComplete(true)
          onCompleteRef.current()
        }, 300)
      }
    }

    executeCommands()
    
    return () => {
      isMounted = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // Les commandes sont constantes, pas besoin de les mettre en dépendance

  return (
    <div className="w-full h-full bg-gray-900 rounded-lg shadow-2xl font-mono text-xs sm:text-sm overflow-hidden flex flex-col">
      {/* Terminal header */}
      <div className="bg-gray-800 px-3 sm:px-4 py-2 flex items-center space-x-2 flex-shrink-0 h-8 sm:h-10">
        <div className="flex space-x-1.5 sm:space-x-2">
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-gray-400 text-xs ml-2 sm:ml-4">Terminal</div>
      </div>
      
      {/* Terminal body - hauteur fixe moins le header */}
      <div className="flex-1 p-3 sm:p-4 text-green-400 overflow-y-auto overflow-x-hidden space-y-1 sm:space-y-1.5 min-h-0 text-left">
        {executedCommands.map((cmd, cmdIndex) => (
          <motion.div key={cmdIndex} className="space-y-0.5">
            {/* Prompt + Command - Afficher uniquement si c'est une nouvelle commande */}
            <div className="flex items-start space-x-1 sm:space-x-2">
              <span className="text-blue-400 font-semibold text-xs sm:text-sm whitespace-nowrap">{cmd.prompt}</span>
              <span className="text-white text-xs sm:text-sm break-all">
                {cmd.isTyping ? cmd.currentTypedCommand : cmd.command}
                {cmd.isTyping && showCursor && (
                  <motion.span 
                    className="text-green-400 ml-0.5 inline-block"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
                  >
                    |
                  </motion.span>
                )}
              </span>
            </div>
            
            {/* Output */}
            {!cmd.isTyping && cmd.currentOutput && cmd.currentOutput.length > 0 && (
              <div className="pl-1 sm:pl-2 space-y-0.5">
                {cmd.currentOutput.map((line: string, lineIndex: number) => (
                  <motion.div
                    key={lineIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className={`text-xs sm:text-sm break-all ${
                      line.includes('{') || line.includes('}') ? 'text-yellow-400' :
                      line.includes('"') ? 'text-blue-300' :
                      line.includes('🚀') ? 'text-green-300' :
                      line.includes('branch') ? 'text-purple-400' :
                      'text-gray-300'
                    }`}
                  >
                    {line}
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
        
        {/* Final prompt after completion */}
        {isComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="flex items-center space-x-1 sm:space-x-2 pt-0.5 sm:pt-1"
          >
            <span className="text-blue-400 font-semibold text-xs sm:text-sm whitespace-nowrap">nicolas@dev:~$</span>
            <motion.span 
              className="text-green-400 ml-1 inline-block"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
            >
              |
            </motion.span>
          </motion.div>
        )}
      </div>
    </div>
  )
}