import { DocumentTitle} from '../../utils/utils';

// error message if page not found
const NotFound = () => {
  DocumentTitle("NotFound Page");
  return (
    <div>
      <p>Eroro 404 - Page Not Found</p>
    </div>
  );
}

export { NotFound };
