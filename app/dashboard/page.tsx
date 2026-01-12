'use client';

import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Gift, Users, TrendingUp, Copy, Eye, EyeOff, Trash2, Plus, DollarSign, Calendar } from 'lucide-react'
import { useState } from 'react'

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [promoCodes, setPromoCodes] = useState([
    { id: 1, code: 'PARTNER2024', discount: 15, status: 'active', uses: 42, maxUses: 100, earnings: 300000 },
    { id: 2, code: 'WELCOME10', discount: 10, status: 'expired', uses: 50, maxUses: 50, earnings: 125000 },
  ])

  const [codeUsage, setCodeUsage] = useState([
    { id: 1, date: '2024-06-01', user: 'Jean Dupont', email: 'jean@email.com', amountSaved: 10000, orderAmount: 75000 },
    { id: 2, date: '2024-06-02', user: 'Marie Lambert', email: 'marie@email.com', amountSaved: 15000, orderAmount: 120000 },
    { id: 3, date: '2024-06-03', user: 'Paul Martin', email: 'paul@email.com', amountSaved: 20000, orderAmount: 150000 },
    { id: 4, date: '2024-06-04', user: 'Sophie Bernard', email: 'sophie@email.com', amountSaved: 25000, orderAmount: 200000 },
  ])

  const stats = {
    totalEarnings: 300000,
    totalUsers: 4,
    activeCodes: 1,
    totalDiscountGiven: 70000,
  }

  const generatePromoCode = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let code = 'PARTNER'
    for (let i = 0; i < 4; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return code
  }

  const handleCreatePromoCode = (e: React.FormEvent) => {
    e.preventDefault()
    const newCode = {
      id: promoCodes.length + 1,
      code: generatePromoCode(),
      discount: 15,
      status: 'active' as const,
      uses: 0,
      maxUses: 100,
      earnings: 0
    }
    setPromoCodes([...promoCodes, newCode])
    setShowCreateModal(false)
  }

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code)
    // Add toast notification here if you have a toast component
  }

  const toggleCodeStatus = (id: number) => {
    setPromoCodes(promoCodes.map(code => 
      code.id === id 
        ? { ...code, status: code.status === 'active' ? 'inactive' : 'active' }
        : code
    ))
  }

  const deletePromoCode = (id: number) => {
    setPromoCodes(promoCodes.filter(code => code.id !== id))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-gray-100 p-4 md:p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-sky-950">Tableau de Bord Partenaire</h1>
            <p className="text-gray-600 mt-2">Gérez vos codes promo et suivez vos commissions</p>
          </div>
          
          <Dialog open={showCreateModal} onOpenChange={setShowCreateModal}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-sky-600 to-emerald-600 hover:from-sky-700 hover:to-emerald-700">
                <Plus className="h-4 w-4 mr-2" />
                Nouveau Code Promo
              </Button>
            </DialogTrigger>
            
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <Gift className="h-5 w-5 text-emerald-600" />
                  Créer un nouveau code promo
                </DialogTitle>
                <DialogDescription>
                  Générer un code promotionnel unique pour vos partenaires
                </DialogDescription>
              </DialogHeader>
              
              <form onSubmit={handleCreatePromoCode}>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="discount">Réduction (%)</Label>
                      <Input 
                        id="discount" 
                        type="number" 
                        min="5" 
                        max="50" 
                        defaultValue="15"
                        className="text-center"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="max-uses">Utilisations max</Label>
                      <Input 
                        id="max-uses" 
                        type="number" 
                        min="1" 
                        max="1000" 
                        defaultValue="100"
                        className="text-center"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="duration">Durée (jours)</Label>
                    <select 
                      id="duration" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      defaultValue="30"
                    >
                      <option value="7">7 jours</option>
                      <option value="30">30 jours</option>
                      <option value="90">90 jours</option>
                      <option value="365">1 an</option>
                    </select>
                  </div>
                </div>
                
                <DialogFooter>
                  <Button type="button" variant="outline" onClick={() => setShowCreateModal(false)}>
                    Annuler
                  </Button>
                  <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700">
                    Générer le code
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white border-sky-100">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Commission Totale</CardTitle>
              <DollarSign className="h-4 w-4 text-emerald-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-sky-950">{stats.totalEarnings} FCFA</div>
              <p className="text-xs text-gray-500 mt-1">+12% ce mois</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-sky-100">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Clients Servis</CardTitle>
              <Users className="h-4 w-4 text-sky-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-sky-950">{stats.totalUsers}</div>
              <p className="text-xs text-gray-500 mt-1">Utilisations actives</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-sky-100">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Codes Actifs</CardTitle>
              <Gift className="h-4 w-4 text-amber-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-sky-950">{stats.activeCodes}</div>
              <p className="text-xs text-gray-500 mt-1">Sur {promoCodes.length} codes</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-sky-100">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Économies Offertes</CardTitle>
              <TrendingUp className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-sky-950">{stats.totalDiscountGiven} FCFA</div>
              <p className="text-xs text-gray-500 mt-1">Pour vos clients</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Main Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full md:w-auto grid-cols-3">
          {/* <TabsTrigger value="overview" className="data-[state=active]:bg-sky-600 data-[state=active]:text-white">
            <Gift className="h-4 w-4 mr-2" />
            Mes Codes
          </TabsTrigger> */}
          <TabsTrigger value="users" className="data-[state=active]:bg-sky-600 data-[state=active]:text-white">
            <Users className="h-4 w-4 mr-2" />
            Utilisateurs
          </TabsTrigger>
          {/* <TabsTrigger value="analytics" className="data-[state=active]:bg-sky-600 data-[state=active]:text-white">
            <TrendingUp className="h-4 w-4 mr-2" />
            Statistiques
          </TabsTrigger> */}
        </TabsList>

        {/* <TabsContent value="overview" className="space-y-6">
          <Card className="border-sky-100">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Mes Codes Promo</span>
                <Badge variant="outline" className="bg-emerald-50 text-emerald-700">
                  {promoCodes.length} codes
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-semibold">Code</TableHead>
                      <TableHead className="font-semibold">Réduction</TableHead>
                      <TableHead className="font-semibold">Utilisations</TableHead>
                      <TableHead className="font-semibold">Statut</TableHead>
                      <TableHead className="font-semibold">Commission</TableHead>
                      <TableHead className="font-semibold">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {promoCodes.map((code) => (
                      <TableRow key={code.id} className="hover:bg-sky-50/50">
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <code className="font-mono font-bold text-sky-950">{code.code}</code>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6"
                              onClick={() => copyToClipboard(code.code)}
                            >
                              <Copy className="h-3 w-3" />
                            </Button>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
                            -{code.discount}%
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{code.uses}</span>
                            <span className="text-gray-500">/ {code.maxUses}</span>
                            <div className="w-16 h-1 bg-gray-200 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-gradient-to-r from-sky-500 to-emerald-500"
                                style={{ width: `${(code.uses / code.maxUses) * 100}%` }}
                              />
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge 
                            className={
                              code.status === 'active' 
                                ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                                : code.status === 'expired'
                                ? 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                            }
                          >
                            {code.status === 'active' ? 'Actif' : code.status === 'expired' ? 'Expiré' : 'Inactif'}
                          </Badge>
                        </TableCell>
                        <TableCell className="font-bold text-emerald-700">
                          {code.earnings.toLocaleString()} FCFA
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => toggleCodeStatus(code.id)}
                              className="h-8 w-8"
                            >
                              {code.status === 'active' ? (
                                <EyeOff className="h-4 w-4 text-amber-600" />
                              ) : (
                                <Eye className="h-4 w-4 text-emerald-600" />
                              )}
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => deletePromoCode(code.id)}
                              className="h-8 w-8 text-red-600 hover:text-red-700 hover:bg-red-50"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent> */}

        <TabsContent value="users" className="space-y-6">
          <Card className="border-sky-100">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Utilisateurs de vos codes</span>
                <Badge variant="outline" className="bg-sky-50 text-sky-700">
                  {codeUsage.length} utilisations
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-semibold">Date</TableHead>
                      <TableHead className="font-semibold">Utilisateur</TableHead>
                      <TableHead className="font-semibold">Votre commission</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {codeUsage.map((usage) => (
                      <TableRow key={usage.id} className="hover:bg-sky-50/50">
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-gray-400" />
                            {usage.date}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">{usage.user}</p>
                            <p className="text-sm text-gray-500">{usage.email}</p>
                          </div>
                        </TableCell>
                        {/* <TableCell className="font-medium">
                          {usage.orderAmount.toLocaleString()} FCFA
                        </TableCell> */}
                        {/* <TableCell>
                          <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                            -{usage.amountSaved.toLocaleString()} FCFA
                          </Badge>
                        </TableCell> */}
                        <TableCell className="font-bold text-emerald-700">
                          {usage.amountSaved} FCFA
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-sky-100">
              <CardHeader>
                <CardTitle>Performance des codes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {promoCodes.map((code) => (
                  <div key={code.id} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{code.code}</span>
                      <span className="text-sm text-gray-500">{code.uses}/{code.maxUses} utilisations</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-sky-500 to-emerald-500"
                        style={{ width: `${(code.uses / code.maxUses) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-sky-100">
              <CardHeader>
                <CardTitle>Résumé mensuel</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Nouveaux clients</span>
                    <span className="font-bold">4</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Commission du mois</span>
                    <span className="font-bold text-emerald-700">45,000 FCFA</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Taux d&apos;utilisation</span>
                    <span className="font-bold">68%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Code le plus utilisé</span>
                    <span className="font-bold text-sky-700">PARTNER2024</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent> */}
      </Tabs>
    </div>
  )
}