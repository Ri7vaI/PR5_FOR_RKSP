import React from 'react'
import Checkbox from 'E:/STUDY/6 SEM/RKSP/PR5/src/components/Checkbox'
import AgreementSubmitButton from 'E:/STUDY/6 SEM/RKSP/PR5/src/components/AgreementSubmitButton'

const LicenseAgreement: React.FC = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: 600 }}>
                <h1>Настоящее Лицензионное соглашение с конечным пользователем</h1>
                <p>
                    Настоящее Лицензионное соглашение с конечным пользователем ("Лицензия")
                    является соглашением между вами и представителями DominionSquad. Эта Лицензия регулирует
                    использование вами этого приложения и всего связанного с ним программного
                    обеспечения, документации, обновлений и обновлений, которые заменяют
                    или дополняют приложение и не распространяются с отдельной лицензией
                    (вместе "Приложение"). Это приложение лицензировано для вас бесплатно.
                    Вы не являетесь владельцем приложения.
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Checkbox name="agree" label="Согласен" />
                    <AgreementSubmitButton />
                </div>
            </div>
        </div>
    )
}

export default LicenseAgreement