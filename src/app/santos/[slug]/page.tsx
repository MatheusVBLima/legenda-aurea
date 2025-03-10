"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { saints } from "@/data/saints";
import { notFound } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { BookOpen } from "lucide-react";

// Função para criar um slug a partir do nome do santo
const createSlug = (name: string) => {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, "-");
};

export default function SaintPage() {
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState("biografia");
  const [isMobile, setIsMobile] = useState(false);
  
  // Detectar se é mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);
  
  // Encontrar o santo pelo slug
  const saint = saints.find((s) => createSlug(s.name) === slug);
  
  if (!saint) {
    notFound();
  }
  
  // Verificar se o santo tem informações adicionais
  const hasAdditionalInfo = saint.additionalInfo !== undefined;

  // Função para renderizar o conteúdo da tab/select selecionada
  const renderContent = () => {
    if (!hasAdditionalInfo) return null;
    
    switch (activeTab) {
      case "biografia":
        return (
          <>
            <h2 className="text-2xl font-serif font-bold mb-4">Biografia</h2>
            <Separator className="mb-4" />
            <div className="prose max-w-none">
              {saint.additionalInfo?.biografia?.split('\n').map((paragraph, index) => (
                paragraph.trim() && <p key={index} className="mb-4">{paragraph.trim()}</p>
              ))}
            </div>
          </>
        );
      case "milagres":
        return (
          <>
            <h2 className="text-2xl font-serif font-bold mb-4">Milagres</h2>
            <Separator className="mb-4" />
            <div className="prose max-w-none">
              {saint.additionalInfo?.milagres?.split('\n').map((paragraph, index) => (
                paragraph.trim() && <p key={index} className="mb-4">{paragraph.trim()}</p>
              ))}
            </div>
          </>
        );
      case "reliquias":
        return (
          <>
            <h2 className="text-2xl font-serif font-bold mb-4">Relíquias</h2>
            <Separator className="mb-4" />
            <div className="prose max-w-none">
              {saint.additionalInfo?.reliquias?.split('\n').map((paragraph, index) => (
                paragraph.trim() && <p key={index} className="mb-4">{paragraph.trim()}</p>
              ))}
            </div>
          </>
        );
      case "devocao":
        return (
          <>
            <h2 className="text-2xl font-serif font-bold mb-4">Devoção</h2>
            <Separator className="mb-4" />
            <div className="prose max-w-none">
              {saint.additionalInfo?.devocao?.split('\n').map((paragraph, index) => (
                paragraph.trim() && <p key={index} className="mb-4">{paragraph.trim()}</p>
              ))}
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="container mx-auto p-2 flex-grow">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Início</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{saint.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="mb-8">
          <h1 className="text-3xl font-serif font-bold mb-4">{saint.name}</h1>
          <p className="text-lg">{saint.description}</p>
        </div>

        {hasAdditionalInfo && (
          <>
            {/* Select para telas menores */}
            {isMobile ? (
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="h-4 w-4 text-amber-600" />
                  <span className="text-sm font-medium">Selecione uma categoria:</span>
                </div>
                <Select value={activeTab} onValueChange={setActiveTab}>
                  <SelectTrigger className="w-full bg-amber-50/50 border-amber-200">
                    <SelectValue placeholder="Selecione uma categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="biografia">Biografia</SelectItem>
                    <SelectItem value="milagres">Milagres</SelectItem>
                    <SelectItem value="reliquias">Relíquias</SelectItem>
                    <SelectItem value="devocao">Devoção</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            ) : (
              /* Tabs para telas maiores */
              <div className="mb-6">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="w-full h-auto flex flex-wrap md:flex-nowrap p-1">
                    <TabsTrigger 
                      value="biografia" 
                      className="flex-1 py-2 px-4 text-center"
                    >
                      Biografia
                    </TabsTrigger>
                    <TabsTrigger 
                      value="milagres" 
                      className="flex-1 py-2 px-4 text-center"
                    >
                      Milagres
                    </TabsTrigger>
                    <TabsTrigger 
                      value="reliquias" 
                      className="flex-1 py-2 px-4 text-center"
                    >
                      Relíquias
                    </TabsTrigger>
                    <TabsTrigger 
                      value="devocao" 
                      className="flex-1 py-2 px-4 text-center"
                    >
                      Devoção
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            )}

            <div className="p-6 rounded-lg shadow-sm">
              {renderContent()}
            </div>
          </>
        )}

        {!hasAdditionalInfo && (
          <div className="p-6 rounded-lg shadow-sm">
            <p className="text-center text-muted-foreground">
              Informações detalhadas sobre este santo ainda não estão disponíveis.
            </p>
          </div>
        )}
      </main>
    </div>
  );
} 