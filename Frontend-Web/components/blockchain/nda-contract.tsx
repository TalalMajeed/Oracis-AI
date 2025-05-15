"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, CheckCircle, Copy, Download, FileText, Lock, Shield } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function NDAContract() {
  const [step, setStep] = useState(1)
  const [signing, setSigning] = useState(false)
  const [signed, setSigned] = useState(false)
  const [agreed, setAgreed] = useState(false)

  const handleSign = () => {
    setSigning(true)
    setTimeout(() => {
      setSigning(false)
      setSigned(true)
      setStep(3)
    }, 2000)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Blockchain-Secured NDA</CardTitle>
            <CardDescription>Securely sign a Non-Disclosure Agreement using blockchain technology</CardDescription>
          </div>
          <Badge className="gap-1">
            <Lock className="h-3 w-3" />
            Blockchain Secured
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        {step === 1 && (
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-sm">
              <Shield className="h-5 w-5 text-primary" />
              <span className="font-medium">
                This NDA is secured by blockchain technology for maximum security and verification
              </span>
            </div>

            <Tabs defaultValue="preview">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="preview">Preview NDA</TabsTrigger>
                <TabsTrigger value="details">Contract Details</TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="space-y-4 pt-4">
                <div className="rounded-md border p-4 h-[300px] overflow-auto">
                  <h3 className="text-lg font-bold mb-4">NON-DISCLOSURE AGREEMENT</h3>
                  <p className="text-sm mb-3">
                    This Non-Disclosure Agreement (the "Agreement") is entered into by and between:
                  </p>
                  <p className="text-sm mb-3">
                    <strong>Company:</strong> Acme Corp., with its principal offices at 123 Business Ave., San
                    Francisco, CA 94103 ("Disclosing Party")
                  </p>
                  <p className="text-sm mb-3">
                    <strong>Recipient:</strong> John Doe, residing at 456 Professional St., New York, NY 10001
                    ("Receiving Party")
                  </p>
                  <p className="text-sm mb-3">
                    <strong>1. Definition of Confidential Information.</strong> "Confidential Information" means any
                    information disclosed by the Disclosing Party to the Receiving Party, either directly or indirectly,
                    in writing, orally or by inspection of tangible objects, including without limitation documents,
                    business plans, source code, software, technical specifications, financial information, marketing
                    plans, customer lists, product roadmaps, and any proprietary information.
                  </p>
                  <p className="text-sm mb-3">
                    <strong>2. Obligations of Receiving Party.</strong> The Receiving Party shall hold all Confidential
                    Information in strict confidence and shall not disclose any Confidential Information to any third
                    party. The Receiving Party shall protect the confidentiality of all Confidential Information with
                    the same degree of care as it uses to protect its own confidential information, but in no event less
                    than reasonable care.
                  </p>
                  <p className="text-sm mb-3">
                    <strong>3. Term.</strong> The obligations of the Receiving Party under this Agreement shall survive
                    for a period of 3 years from the date of disclosure of the Confidential Information.
                  </p>
                  <p className="text-sm">
                    <strong>4. Blockchain Verification.</strong> This Agreement is secured and verified using blockchain
                    technology. Upon execution, a cryptographic hash of this Agreement will be recorded on the
                    blockchain, providing an immutable record of the Agreement and timestamp of execution.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="details" className="space-y-4 pt-4">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <Label className="text-xs text-muted-foreground">Contract Type</Label>
                      <p className="text-sm font-medium">Non-Disclosure Agreement</p>
                    </div>
                    <div className="space-y-1">
                      <Label className="text-xs text-muted-foreground">Blockchain</Label>
                      <p className="text-sm font-medium">Ethereum</p>
                    </div>
                    <div className="space-y-1">
                      <Label className="text-xs text-muted-foreground">Smart Contract</Label>
                      <p className="text-sm font-medium">0x7a58c0be72be218b41c608b7fe7c5bb630736c71</p>
                    </div>
                    <div className="space-y-1">
                      <Label className="text-xs text-muted-foreground">Effective Date</Label>
                      <p className="text-sm font-medium">May 14, 2025</p>
                    </div>
                    <div className="space-y-1">
                      <Label className="text-xs text-muted-foreground">Duration</Label>
                      <p className="text-sm font-medium">3 years</p>
                    </div>
                    <div className="space-y-1">
                      <Label className="text-xs text-muted-foreground">Jurisdiction</Label>
                      <p className="text-sm font-medium">State of California, USA</p>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <Label className="text-xs text-muted-foreground">Parties</Label>
                    <div className="rounded-md border p-3 space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Disclosing Party</span>
                        <Badge variant="outline" className="text-xs">
                          Acme Corp.
                        </Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Receiving Party</span>
                        <Badge variant="outline" className="text-xs">
                          John Doe
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <Alert className="bg-amber-50 border-amber-200">
                    <AlertCircle className="h-4 w-4 text-amber-600" />
                    <AlertTitle>Important Notice</AlertTitle>
                    <AlertDescription>
                      This is a legally binding document. Please review carefully before signing.
                    </AlertDescription>
                  </Alert>
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" checked={agreed} onCheckedChange={(checked) => setAgreed(checked as boolean)} />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I have read and agree to the terms of this Non-Disclosure Agreement
              </label>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <Alert className="bg-blue-50 border-blue-200">
              <Lock className="h-4 w-4 text-blue-600" />
              <AlertTitle>Secure Blockchain Signing</AlertTitle>
              <AlertDescription>
                You are about to sign this document using blockchain technology. This creates an immutable record of
                your agreement.
              </AlertDescription>
            </Alert>

            <div className="space-y-2">
              <Label htmlFor="signature">Digital Signature</Label>
              <Textarea
                id="signature"
                placeholder="Type your full legal name as your digital signature"
                className="h-20"
              />
              <p className="text-xs text-muted-foreground">
                By typing your name above, you are electronically signing this document
              </p>
            </div>

            <div className="rounded-md border p-4 space-y-3">
              <h4 className="text-sm font-medium">Blockchain Transaction Details</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="space-y-1">
                  <Label className="text-muted-foreground">Network</Label>
                  <p>Ethereum Mainnet</p>
                </div>
                <div className="space-y-1">
                  <Label className="text-muted-foreground">Gas Fee</Label>
                  <p>~0.002 ETH</p>
                </div>
                <div className="space-y-1">
                  <Label className="text-muted-foreground">Document Hash</Label>
                  <p className="truncate">0x7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069</p>
                </div>
                <div className="space-y-1">
                  <Label className="text-muted-foreground">Timestamp</Label>
                  <p>May 14, 2025 11:38 PM UTC</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <Alert className="bg-green-50 border-green-200">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertTitle>Successfully Signed!</AlertTitle>
              <AlertDescription>Your NDA has been successfully signed and recorded on the blockchain.</AlertDescription>
            </Alert>

            <div className="rounded-md border p-4 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium">Transaction Details</h4>
                <Badge variant="outline" className="gap-1">
                  <CheckCircle className="h-3 w-3" /> Verified
                </Badge>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Transaction Hash</span>
                  <div className="flex items-center gap-1">
                    <span className="font-mono text-xs truncate max-w-[180px]">
                      0x3a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u
                    </span>
                    <Button variant="ghost" size="icon" className="h-6 w-6">
                      <Copy className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Block Number</span>
                  <span>15,782,391</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Timestamp</span>
                  <span>May 14, 2025 11:39:24 PM UTC</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status</span>
                  <span className="text-green-600 font-medium">Confirmed</span>
                </div>
              </div>
            </div>

            <div className="rounded-md border p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="text-sm font-medium">NDA_Acme_Corp_John_Doe.pdf</h4>
                  <p className="text-xs text-muted-foreground">Signed document with blockchain verification</p>
                </div>
                <Button variant="outline" size="sm" className="ml-auto gap-1">
                  <Download className="h-3.5 w-3.5" />
                  Download
                </Button>
              </div>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        {step === 1 ? (
          <>
            <Button variant="outline">Cancel</Button>
            <Button disabled={!agreed} onClick={() => setStep(2)}>
              Continue to Signing
            </Button>
          </>
        ) : step === 2 ? (
          <>
            <Button variant="outline" onClick={() => setStep(1)}>
              Back
            </Button>
            {signing ? (
              <Button disabled>
                <div className="h-4 w-4 mr-2 rounded-full border-2 border-current border-t-transparent animate-spin" />
                Signing...
              </Button>
            ) : (
              <Button onClick={handleSign}>Sign Document</Button>
            )}
          </>
        ) : (
          <>
            <Button variant="outline">View on Blockchain</Button>
            <Button>Close</Button>
          </>
        )}
      </CardFooter>
    </Card>
  )
}
