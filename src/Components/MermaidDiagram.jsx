import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';

const MermaidDiagram = ({ diagram, id }) => {
  const mermaidRef = useRef(null);
  const darkMode = useSelector((state) => state.theme.darkMode);

  useEffect(() => {
    if (!diagram || !mermaidRef.current) return;

    mermaid.initialize({ 
      startOnLoad: true,
      theme: darkMode ? 'dark' : 'default',
      securityLevel: 'loose',
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
        curve: 'basis',
      },
    });

    const renderDiagram = async () => {
      try {
        mermaidRef.current.innerHTML = '';
        const { svg } = await mermaid.render(`mermaid-${id}`, diagram);
        mermaidRef.current.innerHTML = svg;
      } catch (error) {
        console.error('Error rendering Mermaid diagram:', error);
        mermaidRef.current.innerHTML = '<p>Error rendering diagram</p>';
      }
    };

    renderDiagram();
  }, [diagram, id, darkMode]);

  if (!diagram) return null;

  return (
    <Box
      ref={mermaidRef}
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        my: 3,
        p: 2,
        backgroundColor: (theme) => theme.palette.mode === 'dark' 
          ? 'rgba(255, 255, 255, 0.02)' 
          : 'rgba(0, 0, 0, 0.02)',
        borderRadius: '11px',
        overflow: 'auto',
        '& svg': {
          maxWidth: '100%',
          height: 'auto',
        },
      }}
    />
  );
};

export default MermaidDiagram;

