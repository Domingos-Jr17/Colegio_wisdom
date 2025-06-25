import React from 'react';

// Importing components from the shadcn library
import { Button, Card, Modal } from 'shadcn-ui';

const ImportedComponents: React.FC = () => {
    return (
        <div>
            <Button variant="primary">Clique Aqui</Button>
            <Card title="Título do Card" description="Descrição do Card" />
            <Modal title="Título do Modal" isOpen={false}>
                <p>Conteúdo do Modal</p>
            </Modal>
        </div>
    );
};

export default ImportedComponents;