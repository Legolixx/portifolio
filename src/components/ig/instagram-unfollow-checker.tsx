/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import type * as React from "react"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Upload, Users, FileText, UserRoundSearch, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Image from "next/image"

interface InstagramData {
  seguidores: string[]
  seguindo: string[]
}

const tutorialSteps = [
  {
    id: 1,
    title: "Acesse o Menu de Configurações",
    description:
      "Abra seu perfil no Instagram, toque nas três linhas no canto superior direito e acesse 'Configurações e privacidade'.",
    image: "/ig/IMG_6150.PNG",
  },
  {
    id: 2,
    title: "Localize a Opção de Dados",
    description:
      "Use a barra de pesquisa e digite 'Baixar suas informações'. Toque na opção exibida para continuar.",
    image: "/ig/IMG_6151.PNG",
  },
  {
    id: 3,
    title: "Acesse a Central de Downloads",
    description:
      "Toque em 'Baixar ou transferir informações' para iniciar o processo de exportação dos dados.",
    image: "/ig/IMG_6153.PNG",
  },
  {
    id: 4,
    title: "Escolha o Tipo de Dados",
    description:
      "Selecione a opção 'Algumas das suas informações' para personalizar os dados que deseja exportar.",
    image: "/ig/IMG_6154.PNG",
  },
  {
    id: 5,
    title: "Filtre os Dados Desejados",
    description:
      "Busque por 'Seguidores e seguindo', marque essa opção e toque em 'Avançar'.",
    image: "/ig/IMG_6157.PNG",
  },
  {
    id: 6,
    title: "Escolha o Método de Entrega",
    description:
      "Selecione a opção 'Baixar no dispositivo' para salvar os arquivos diretamente no seu celular.",
    image: "/ig/IMG_6158.PNG",
  },
  {
    id: 7,
    title: "Configure o Formato e Período",
    description:
      "Mude o formato para 'JSON' e defina o intervalo de datas como 'Desde o início'. Em seguida, toque em 'Criar arquivos'.",
    image: "/ig/IMG_6159.PNG",
  },
  {
    id: 8,
    title: "Aguarde e Baixe o Arquivo",
    description:
      "O Instagram processará sua solicitação. Assim que o arquivo estiver disponível, baixe-o e salve no seu dispositivo.",
    image: "/ig/IMG_6160.PNG",
  },
  {
    id: 9,
    title: "Extraia o Conteúdo do Arquivo",
    description:
      "Após o download, toque no arquivo ZIP e selecione a opção 'Descomprimir' ou 'Extrair'.",
    image: "/ig/IMG_6162.PNG",
  },
  {
    id: 10,
    title: "Acesse a Pasta Correta",
    description:
      "Navegue até a pasta chamada 'connections', depois entre em 'followers_and_following'.",
    image: "/ig/IMG_6163.PNG",
  },
  {
    id: 11,
    title: "Selecione os Arquivos JSON",
    description:
      "Localize os arquivos 'following.json' e 'followers_1.json' e envie os dois no formulário abaixo para identificar quem não te segue de volta.",
    image: "/ig/IMG_6164.PNG",
  },
]


export default function InstagramUnfollowChecker() {
  const [partialData, setPartialData] = useState<Partial<InstagramData>>({})
  const [jsonData, setJsonData] = useState<InstagramData | null>(null)
  const [unfollowers, setUnfollowers] = useState<string[]>([])
  const [error, setError] = useState<string>("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
  const files = event.target.files
  if (!files || files.length === 0) return

  Array.from(files).forEach((file) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string
        const json = JSON.parse(content)
        const newPartial: Partial<InstagramData> = {}

        if (file.name.toLowerCase().includes("followers")) {
          const seguidores = json.map((item: any) => item.string_list_data?.[0]?.value).filter(Boolean)
          newPartial.seguidores = seguidores
        } else if (file.name.toLowerCase().includes("following")) {
          const seguindo = (json.relationships_following || []).map(
            (item: any) => item.string_list_data?.[0]?.value
          ).filter(Boolean)
          newPartial.seguindo = seguindo
        }

        setPartialData((prev) => {
          const combined = { ...prev, ...newPartial }

          // Se já tiver os dois, setar jsonData completo
          if (combined.seguidores && combined.seguindo) {
            setJsonData(combined as InstagramData)
            setError("")
            setUnfollowers([])
          }

          return combined
        })
      } catch (err) {
        setError("Erro ao processar os arquivos JSON. Verifique se os dois arquivos estão corretos.")
      }
    }

    reader.readAsText(file)
  })
}




  const findUnfollowers = () => {
    if (!jsonData) return

    const followersSet = new Set(jsonData.seguidores)
    const notFollowingBack = jsonData.seguindo.filter((username) => !followersSet.has(username))

    setUnfollowers(notFollowingBack)
    setCurrentPage(1)
  }

  const totalPages = Math.ceil(unfollowers.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentUnfollowers = unfollowers.slice(startIndex, endIndex)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">Instagram Unfollow Checker</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubra quem você segue mas não te segue de volta no Instagram. Siga o tutorial abaixo para extrair seus
            dados.
          </p>
        </div>

        {/* Tutorial Carousel */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Como Extrair seus Dados do Instagram
            </CardTitle>
            <CardDescription>
              Siga estes passos para obter o arquivo JSON com suas informações de seguidores
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Carousel className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                {tutorialSteps.map((step) => (
                  <CarouselItem key={step.id}>
                    <div className="p-4">
                      <Card>
                        <CardContent className="flex flex-col md:flex-row items-center gap-6 p-6">
                          <div className="flex-1 space-y-4">
                            <div className="flex items-center gap-2">
                              <Badge variant="secondary" className="text-sm">
                                Passo {step.id}
                              </Badge>
                            </div>
                            <h3 className="text-xl font-semibold">{step.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{step.description}</p>
                          </div>
                          <div className="flex-shrink-0">
                            <Image
                              src={step.image || "/placeholder.svg"}
                              alt={step.title}
                              width={150}
                              height={100}
                              className="rounded-lg border"
                            />
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </CardContent>
        </Card>

        {/* Upload Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5" />
              Upload do Arquivo JSON
            </CardTitle>
            <CardDescription>Faça o upload do arquivo JSON com seus dados de seguidores e seguindo</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="json-file">Arquivo JSON</Label>
              <Input id="json-file" type="file" accept=".json" multiple onChange={handleFileUpload} className="cursor-pointer" />
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {jsonData && (
              <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 text-green-700">
                  <Users className="h-4 w-4" />
                  <span className="font-medium">Dados carregados com sucesso!</span>
                </div>
                <div className="flex gap-4 text-sm text-green-600">
                  <span>Seguidores: {jsonData.seguidores.length}</span>
                  <span>Seguindo: {jsonData.seguindo.length}</span>
                </div>
              </div>
            )}

            <Button onClick={findUnfollowers} disabled={!jsonData} className="w-full sm:w-auto">
              <UserRoundSearch className="h-4 w-4 mr-2" />
              Ver Não Seguidores
            </Button>
          </CardContent>
        </Card>

        {/* Results Table */}
        {unfollowers.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                Usuários que Não Te Seguem de Volta
              </CardTitle>
              <CardDescription>
                {unfollowers.length} usuários encontrados que você segue mas não te seguem de volta
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12">#</TableHead>
                      <TableHead>Username</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {currentUnfollowers.map((username, index) => (
                      <TableRow key={username}>
                        <TableCell className="font-medium">{startIndex + index + 1}</TableCell>
                        <TableCell>@{username}</TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => window.open(`https://instagram.com/${username}`, "_blank")}
                          >
                            Ver Perfil
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-between space-x-2 py-4">
                  <div className="text-sm text-gray-500">
                    Mostrando {startIndex + 1} a {Math.min(endIndex, unfollowers.length)} de {unfollowers.length}{" "}
                    resultados
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                    >
                      Anterior
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                    >
                      Próximo
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
