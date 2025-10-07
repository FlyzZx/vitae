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
      delay: 400
    },
    {
      prompt: "nicolas@dev:~$",
      command: "cat skills.json",
      output: [
        "{",
        '  "frontend": ["React", "TypeScript", "Next.js"],',
        '  "backend": ["Node.js", "Python", "PostgreSQL"],',
        '  "passion": "Innovation & Expériences utilisateur"',
        "}"
      ],
      delay: 200
    },
    {
      prompt: "nicolas@dev:~$",
      command: "git status",
      output: [
        "On branch main",
        "Prêt pour de nouveaux projets ! 🚀"
      ],
      delay: 300
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
    const executeCommands = async () => {
      await new Promise(resolve => setTimeout(resolve, 600))

      for (let cmdIndex = 0; cmdIndex < commands.length; cmdIndex++) {
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
          await new Promise(resolve => setTimeout(resolve, 50))
        }

        // Pause avant l'output
        await new Promise(resolve => setTimeout(resolve, 200))
        
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
          await new Promise(resolve => setTimeout(resolve, cmd.delay || 300))
        }

        // Pause avant la commande suivante
        if (cmdIndex < commands.length - 1) {
          await new Promise(resolve => setTimeout(resolve, 500))
        }
      }

      // Animation terminée
      setTimeout(() => {
        setIsComplete(true)
        onCompleteRef.current()
      }, 800)
    }

    executeCommands()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // Les commandes sont constantes, pas besoin de les mettre en dépendance

  return (
    <div className="w-full h-full bg-gray-900 rounded-lg shadow-2xl font-mono text-sm overflow-hidden flex flex-col">
      {/* Terminal header */}
      <div className="bg-gray-800 px-4 py-2 flex items-center space-x-2 flex-shrink-0 h-10">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-gray-400 text-xs ml-4">Terminal</div>
      </div>
      
      {/* Terminal body - hauteur fixe moins le header */}
      <div className="flex-1 p-4 text-green-400 overflow-y-auto space-y-2 min-h-0">
        {executedCommands.map((cmd, cmdIndex) => (
          <motion.div key={cmdIndex} className="space-y-1">
            {/* Prompt + Command */}
            <div className="flex items-center space-x-2">
              <span className="text-blue-400 font-semibold">{cmd.prompt}</span>
              <span className="text-white">
                {cmd.isTyping ? cmd.currentTypedCommand : cmd.command}
                {cmd.isTyping && showCursor && (
                  <motion.span 
                    className="bg-green-400 text-gray-900 ml-1"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
                  >
                    █
                  </motion.span>
                )}
              </span>
            </div>
            
            {/* Output */}
            {!cmd.isTyping && cmd.currentOutput && cmd.currentOutput.length > 0 && (
              <div className="pl-2 space-y-1">
                {cmd.currentOutput.map((line: string, lineIndex: number) => (
                  <motion.div
                    key={lineIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className={
                      line.includes('{') || line.includes('}') ? 'text-yellow-400' :
                      line.includes('"') ? 'text-blue-300' :
                      line.includes('🚀') ? 'text-green-300' :
                      line.includes('branch') ? 'text-purple-400' :
                      'text-gray-300'
                    }
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
            className="flex items-center space-x-2 pt-2"
          >
            <span className="text-blue-400 font-semibold">nicolas@dev:~$</span>
            <motion.span 
              className="bg-green-400 text-gray-900"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
            >
              █
            </motion.span>
          </motion.div>
        )}
      </div>
    </div>
  )
}