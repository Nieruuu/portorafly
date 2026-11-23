import { siPython, siDocker } from 'simple-icons';

export function ProjectMotionAccent({ projectId }: { projectId: string }) {
  switch (projectId) {
    case 'revishit':
      return <div className="scene-accent review-sheet" aria-hidden="true">
        <i /><i /><i /><b className="review-seal"><span /></b>
      </div>;
    case 'taxation-map':
      return <div className="scene-accent survey-plot" aria-hidden="true">
        <i className="survey-field" /><i className="survey-pin" />
      </div>;
    case 'automation':
      return <div className="scene-accent deploy-track" aria-hidden="true">
        <i className="deploy-wire" />
        {[siPython, siDocker].map(icon => <span className="deploy-node" key={icon.slug}>
          <svg viewBox="0 0 24 24" fill="currentColor"><path d={icon.path} /></svg>
        </span>)}
        <span className="deploy-node deploy-done">✓</span>
      </div>;
    case 'blog':
      return <div className="scene-accent editor-page" aria-hidden="true">
        <b>Aa</b><i /><i /><i />
      </div>;
    default:
      return null;
  }
}
