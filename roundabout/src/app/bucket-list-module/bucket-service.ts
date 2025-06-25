import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { bucketItem } from '../../shared/models/bucketItem';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root',
})
export class BucketService {
  constructor(private http: HttpClient) {}

  /**
   * Returns the standard HTTP options for requests.
   * This includes setting the 'Content-Type' header to 'application/json'.
   */
  private getStandardOptions() : any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
  }
  /**
   * Fetches the list of bucket items from json file.
   * @returns An Observable containing the list of bucket items.
   */
  getBucketItems() {
    let options = this.getStandardOptions();
    options.params = new HttpParams({
      fromObject: {
        format: 'json',
      }
    })
    return this.http.get('/bucketItems.json', options).pipe(catchError(this.handleError));
  }

  // Error handling method
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('There is an issue with the client or network:', error.error);
    } else {
      console.error('Server returned an error:', error.error);
    }
    return throwError(() => new Error('Cannot retrieve bucket items; please try again later.'));
   
  }


  /**
   * Adds a new bucket item to the server.
   * @param bucketText The text of the bucket item to be added.
   * @returns An Observable containing the response from the server.
   */
  private addBucketItem(bucketItem: bucketItem) {
    let options = this.getStandardOptions();
    options.headers = options.headers.set('Authorization', 'value-needed-for-authorization'); // Example of adding an auth header
    return this.http.post('/bucketItems.json', bucketItem, options);
  }
}
