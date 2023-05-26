function CommentForm(){

    return (
        <form onSubmit={handleSubmit} >
          <h2>{formType}</h2>
          <label>Body
            <textarea value={body} onChange={update('body')} />
          </label>
          <input type="submit" value={formType} />
        </form>
      );
}

export default CommentForm