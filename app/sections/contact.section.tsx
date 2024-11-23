import { FormDefaultComponent } from "@/components/form/form-default.component"
export function ContactSection() {
    return (
        <div className="bg-[url('/view-ancient-greek-bust-figure.png')] pt-32 h-screen bg-cover bg-center">
            <div className="ml-52">
                <div>
                <h1 className="text-6xl font-black w-2/5 text-left text-accentSecondary">Agende sua consulta.</h1>
                <p className="mt-8 w-2/4 font-base opacity-50 text-white">Estou à disposição para ouvir seu caso e oferecer a orientação jurídica personalizada que você precisa. Entre em contato!</p>
                </div>
                <div className="flex mt-16 gap-6">
                    <FormDefaultComponent/>
                </div>
            </div>
        </div>
    )
}