# Clean Name – JavaScript action

This action takes a string and turns it into a name suitable for upload as an
artifact. In particular, all occurrences of these 9 characters are replaced by underscores: `/':<>|*?\`.

## Inputs

### `dirty`

**Required** The string to clean.

## Outputs

### `clean`

The cleaned name.

## Example usage

Assuming that we’ve already generated documentation in `target/doc`, we now want to save it as a GitHub Actions artifact whose name is based on the name of the current repository. However, we can’t use that name as-is because it contains a `/`, so we’ll use the Clean Name action to fix that:

```yaml
  - name: Generate documentation artifact name
    id: docs-dir
    uses: action-util/clean-name@v1
    with:
      dirty: doc-${{ github.repository }}
      
  - name: Save documentation artifact
    uses: actions/upload-artifact@v1
    with:
      name: ${{ steps.docs-dir.outputs.clean }}
      path: target/doc
```
