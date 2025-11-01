
'use client';

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Clipboard } from 'lucide-react';
import { projectFiles } from '@/lib/project-files';

type DownloadCodeDialogProps = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
};

export function DownloadCodeDialog({ isOpen, onOpenChange }: DownloadCodeDialogProps) {
  const { toast } = useToast();

  const handleCopy = (content: string, fileName: string) => {
    navigator.clipboard.writeText(content);
    toast({
      title: 'Copied to Clipboard',
      description: `${fileName} has been copied.`,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Download Your Code</DialogTitle>
          <DialogDescription>
            Here is the full source code for your project. You can copy the contents of each file.
          </DialogDescription>
        </DialogHeader>
        <div className="flex-grow min-h-0">
          <Tabs defaultValue={projectFiles[0].path} className="h-full flex flex-col">
            <TabsList className="flex-shrink-0">
                <ScrollArea className="w-full whitespace-nowrap">
                    <div className="flex space-x-4 p-1">
                        {projectFiles.map((file) => (
                            <TabsTrigger key={file.path} value={file.path} className="text-xs">
                                {file.path.split('/').pop()}
                            </TabsTrigger>
                        ))}
                    </div>
                </ScrollArea>
            </TabsList>
            <div className="flex-grow relative min-h-0 mt-2">
                {projectFiles.map((file) => (
                <TabsContent key={file.path} value={file.path} className="h-full m-0">
                    <div className="relative h-full">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-2 right-2 z-10 h-8 w-8"
                            onClick={() => handleCopy(file.content, file.path)}
                        >
                            <Clipboard className="h-4 w-4" />
                            <span className="sr-only">Copy</span>
                        </Button>
                        <ScrollArea className="h-full rounded-md border bg-muted">
                            <pre className="text-sm p-4_ whitespace-pre-wrap_ break-all">
                                <code>{file.content}</code>
                            </pre>
                        </ScrollArea>
                    </div>
                </TabsContent>
                ))}
            </div>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
}
