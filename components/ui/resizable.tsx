'use client';

import * as React from 'react';
import { GripVertical } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Panel,
  PanelGroup,
  PanelResizeHandle,
  ImperativePanelHandle,
  ImperativePanelGroupHandle,
  type PanelResizeHandleProps
} from 'react-resizable-panels';

const ResizablePanelGroup = React.forwardRef<
  ImperativePanelGroupHandle,
  React.ComponentProps<typeof PanelGroup>
>(({ className, ...props }, ref) => (
  <PanelGroup
    ref={ref}
    className={cn(
      'flex h-full w-full data-[panel-group-direction=vertical]:flex-col',
      className
    )}
    {...props}
  />
));
ResizablePanelGroup.displayName = 'ResizablePanelGroup';

const ResizablePanel = React.forwardRef<
  ImperativePanelHandle,
  React.ComponentProps<typeof Panel>
>(({ className, ...props }, ref) => (
  <Panel
    ref={ref}
    className={cn('relative h-full w-full', className)}
    {...props}
  />
));
ResizablePanel.displayName = 'ResizablePanel';

const ResizableHandle = React.forwardRef<
  HTMLDivElement,
  PanelResizeHandleProps
>(({ className, ...props }, ref) => (
  <PanelResizeHandle
    {...props}
    className={cn(
      'relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-4 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-4 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90',
      className
    )}
  >
    <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
      <GripVertical className="h-2.5 w-2.5" />
    </div>
  </PanelResizeHandle>
));
ResizableHandle.displayName = 'ResizableHandle';

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
